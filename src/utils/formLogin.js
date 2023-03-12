export const handleLoginChange = (event, formData) => {
  const { name, value } = event.target;
  return { ...formData, [name]: value };
};

export const handleRegisterChange = (
  e,
  type,
  registerData,
  setRegisterData,
  setValidate,
  validate
) => {
  const value = e.target.value;
  const newRegisterData = { ...registerData, [type]: value };
  setRegisterData(newRegisterData);

  switch (type) {
    case "email":
      setValidate((prevState) => [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        ...prevState.slice(1),
      ]);
      break;
    case "password":
      setValidate((prevState) => [
        prevState[0],
        value.length > 5,
        ...prevState.slice(2),
      ]);
      break;
    case "rePassword":
      setValidate((prevState) => [
        prevState[0],
        prevState[1],
        value === registerData.password,
        ...prevState.slice(3),
      ]);
      break;
    case "firstName":
      setValidate((prevState) => [
        prevState[0],
        prevState[1],
        prevState[2],
        value !== "",
        ...prevState.slice(4),
      ]);
      break;
    case "lastName":
      setValidate((prevState) => [
        prevState[0],
        prevState[1],
        prevState[2],
        prevState[3],
        value !== "",
      ]);
      break;

    default:
      break;
  }
};

export const handleLogOut = () => {
  // Xóa localStorage
  localStorage.removeItem("email");
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("token");

  // Chuyển hướng về trang chủ
  window.location.href = "/";
};
