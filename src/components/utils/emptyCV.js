import emptyAvatar from "../../photos/avatar.png";
import { v4 as uuidv4 } from "uuid";

const emptyCV = {
  personalInfo: {
    firstName: "",
    middleName: "",
    lastName: "",
    photo: emptyAvatar,
    title: "",
    phoneNumber: "",
    email: "",
    location: "",
  },

  experience: [
    {
      id: uuidv4(),
      from: "",
      to: "",
      position: "",
      companyName: "",
      location: "",
    },
  ],
  education: [
    { id: uuidv4(), from: "", to: "", schoolName: "", degree: "", subject: "" },
  ],
};

export default emptyCV;
