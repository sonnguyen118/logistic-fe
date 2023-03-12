export function checkEmail(email) {
  // Regex pattern để kiểm tra địa chỉ email
  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  // Kiểm tra định dạng email
  if (filter.test(email)) {
    return false;
  } else {
    return true;
  }
}

export function checkPassword(value) {
  // Regex pattern để kiểm tra địa chỉ email

  if (value === "" || value.length < 6) {
    return true;
  } else {
    return false;
  }
}

export function checkName(value) {
  // Regex pattern để kiểm tra địa chỉ email
  const testname = /\d/;
  if (testname.test(value)) {
    return true;
  } else {
    return false;
  }
}
