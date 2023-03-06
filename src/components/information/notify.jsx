import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Pagination from "../Pagination";

const Notify = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([
    {
      image:
        "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/334639479_1275594630002346_3282455257296101420_n.png?stp=dst-png_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=gThCQDFB910AX9ItLxL&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAbTUsz7MNbDFFlrQ1jc5TeETN5DpfIDDD1N_dXWCnkzw&oe=640B025A",
      title: "Thông báo đơn hàng giả mạo",
      content:
        "Trịnh Kiểm (chữ Hán: 鄭檢, 14 tháng 9 năm 1503 – 24 tháng 3 năm 1570), tên thụy Thế Tổ Minh Khang Thái vương (世祖明康太王), là nhà chính trị, quân sự có ảnh hưởng của Đại Việt thời Nam-Bắc triều. Trên danh nghĩa tôn phò các vua Lê trung hưng, ông là nhà lãnh đạo trên thực tế của phe Bắc triều từ năm 1545 tới khi qua đời. Dù tước hiệu cao nhất của ông khi còn sống là Thái quốc công, ông được đời sau truy tôn làm Thế Tổ Minh Khang Thái Vương và được xem là vị chúa đầu tiên của họ Trịnh – gia tộc nắm thực quyền cai trị Đại Việt hơn 200 năm từ giữa thế kỷ 16 đến cuối thế kỷ 18.",
      time: "29/02/2023 18:20",
      link: "/",
    },
    {
      image:
        "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/334639479_1275594630002346_3282455257296101420_n.png?stp=dst-png_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=gThCQDFB910AX9ItLxL&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAbTUsz7MNbDFFlrQ1jc5TeETN5DpfIDDD1N_dXWCnkzw&oe=640B025A",
      title: "Thông báo đơn hàng giả mạo",
      content:
        "Trịnh Kiểm (chữ Hán: 鄭檢, 14 tháng 9 năm 1503 – 24 tháng 3 năm 1570), tên thụy Thế Tổ Minh Khang Thái vương (世祖明康太王), là nhà chính trị, quân sự có ảnh hưởng của Đại Việt thời Nam-Bắc triều. Trên danh nghĩa tôn phò các vua Lê trung hưng, ông là nhà lãnh đạo trên thực tế của phe Bắc triều từ năm 1545 tới khi qua đời. Dù tước hiệu cao nhất của ông khi còn sống là Thái quốc công, ông được đời sau truy tôn làm Thế Tổ Minh Khang Thái Vương và được xem là vị chúa đầu tiên của họ Trịnh – gia tộc nắm thực quyền cai trị Đại Việt hơn 200 năm từ giữa thế kỷ 16 đến cuối thế kỷ 18.",
      time: "29/02/2023 18:20",
      link: "/",
    },
    {
      image:
        "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/334639479_1275594630002346_3282455257296101420_n.png?stp=dst-png_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=gThCQDFB910AX9ItLxL&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAbTUsz7MNbDFFlrQ1jc5TeETN5DpfIDDD1N_dXWCnkzw&oe=640B025A",
      title: "Thông báo đơn hàng giả mạo",
      content:
        "Trịnh Kiểm (chữ Hán: 鄭檢, 14 tháng 9 năm 1503 – 24 tháng 3 năm 1570), tên thụy Thế Tổ Minh Khang Thái vương (世祖明康太王), là nhà chính trị, quân sự có ảnh hưởng của Đại Việt thời Nam-Bắc triều. Trên danh nghĩa tôn phò các vua Lê trung hưng, ông là nhà lãnh đạo trên thực tế của phe Bắc triều từ năm 1545 tới khi qua đời. Dù tước hiệu cao nhất của ông khi còn sống là Thái quốc công, ông được đời sau truy tôn làm Thế Tổ Minh Khang Thái Vương và được xem là vị chúa đầu tiên của họ Trịnh – gia tộc nắm thực quyền cai trị Đại Việt hơn 200 năm từ giữa thế kỷ 16 đến cuối thế kỷ 18.",
      time: "29/02/2023 18:20",
      link: "/",
    },
  ]);
  function handleDoubleClick(link) {
    console.log(link);
    navigate(`${link}`); // Chuyển sang trang mới
  }
  return (
    <>
      <div className="information-notify">
        <div className="information-notify-header">
          <div className="information-notify-header-title">THÔNG BÁO</div>
          <div className="information-notify-header-sub">
            Đánh dấu đã đọc tất cả
          </div>
        </div>
        <div className="information-notify-main">
          {data != undefined ? (
            <>
              {data.length > 0 ? (
                <>
                  <div className="information-notify-main-group">
                    {data.map((data, index) => (
                      <>
                        <div
                          className="information-notify-main-group-item"
                          onDoubleClick={(e) => handleDoubleClick(data.link)}
                        >
                          <div
                            className="information-notify-main-group-item-image"
                            style={{
                              backgroundImage: `url(${data.image})`,
                            }}
                          ></div>
                          <div className="information-notify-main-group-item-infor">
                            <div className="information-notify-main-group-item-infor-title">
                              {data.title}
                            </div>
                            <div className="information-notify-main-group-item-infor-content">
                              {data.content}
                            </div>
                            <div className="information-notify-main-group-item-infor-time">
                              {data.time}
                            </div>
                          </div>
                          <Link to={data.link}>
                            <div className="information-notify-main-group-item-btn">
                              Xem chi tiết
                            </div>
                          </Link>
                        </div>
                      </>
                    ))}
                  </div>
                  <div className="information-notify-main-pagination">
                    <Pagination param={"page"} max={100} maxpage={30} />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="information-notify-main-embty"
                    style={{
                      backgroundImage: `url(/nonotify.png)`,
                    }}
                  ></div>
                  <div className="information-notify-main-embty-text">
                    Chưa có thông báo nào
                  </div>
                  <div className="information-notify-main-embty-sub">
                    Chúng tôi sẽ gửi tới bạn thông báo sớm nhất
                  </div>
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Notify;
