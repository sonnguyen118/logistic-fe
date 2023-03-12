bender.loadExternalPlugin("exportpdf","/apps/plugin/"),CKEDITOR.plugins.load("exportpdf",(function(){function e(e,o){var n=exportPdfUtils.getDefaultConfig("unit",e||{});bender.editorBot.create({name:"editor"+Date.now(),config:n,startupData:"<p>Hello World!</p>"},(function(e){o&&o(e.editor)}))}var o,n,t,r=(n=sinon.fakeServer.create(),t=0,n.respondWith((function(e){"/incremental_token"===e.url?(e.respond(200,{},"sample-token-value"+t),t+=1):"/empty-token"===e.url?e.respond(200,{},""):e.respond(200,{},"sample-token-value")})),n);bender.test({setUp:function(){bender.tools.ignoreUnsupportedEnvironment("exportpdf"),o=sinon.stub(CKEDITOR.plugins.exportpdf,"downloadFile")},tearDown:function(){o.restore()},"test token is fetched if tokenUrl is correct":function(){e({exportPdf_tokenUrl:"/custom-url"},(function(e){e.on("exportPdf",(function(e){assert.areEqual(e.data.token,"sample-token-value","Token value is incorrect.")}),null,null,17),r.respond(),e.execCommand("exportPdf"),r.respond()}))},"test authentication header is added if token is provided":function(){e({exportPdf_tokenUrl:"/custom-url"},(function(e){r.respond(),e.execCommand("exportPdf"),r.respond(),assert.areEqual("sample-token-value",r.requests[r.requests.length-1].requestHeaders.Authorization,"Authorization token was not set properly.")}))},"test console.warn is called if tokenUrl is not provided":function(){CKEDITOR.once("log",(function(e){e.cancel(),assert.areEqual("exportpdf-no-token-url",e.data.errorCode,"There should be URL error log.")})),e({exportPdf_tokenUrl:""})},"test console.warn is called on POST request if token is empty":function(){var o=CKEDITOR.on("log",(function(e){"exportpdf-no-token"===e.data.errorCode&&(e.cancel(),CKEDITOR.removeListener("log",o),assert.areEqual("exportpdf-no-token",e.data.errorCode,"`exportpdf-no-token` should occur."))}));e({exportPdf_tokenUrl:"/empty-token"},(function(e){r.respond(),e.execCommand("exportPdf"),r.respond()}))},"test console.warn is called on POST request if token was not fetched at all":function(){var o=CKEDITOR.on("log",(function(e){"exportpdf-no-token"===e.data.errorCode&&(e.cancel(),CKEDITOR.removeListener("log",o),assert.areEqual("exportpdf-no-token",e.data.errorCode,"`exportpdf-no-token` should occur."))}));e({exportPdf_tokenUrl:"/custom-url"},(function(e){e.execCommand("exportPdf"),r.respond()}))},"test token refreshes in the declared intervals":function(){CKEDITOR.once("instanceCreated",(function(e){e.editor.exportPdfTokenInterval=200})),e({exportPdf_tokenUrl:"/incremental_token"},(function(e){r.respond(),setTimeout((function(){resume((function(){r.respond(),e.on("exportPdf",(function(e){assert.areNotSame(e.data.token,"sample-token-value0","Token was not refreshed.")}),null,null,17),e.execCommand("exportPdf"),r.respond()}))}),500),wait()}))},"test file is downloaded also without token":function(){e({exportPdf_tokenUrl:"/empty-token"},(function(e){r.respond(),e.execCommand("exportPdf"),r.respond(),sinon.assert.calledOnce(o),assert.pass()}))}})}));