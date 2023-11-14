import React from "react";
import bgImg from "../assets/img1.jpg";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  //密碼驗證
  const validatePassword = (value) => {
    const confirmPassword = watch("password");
    return value === confirmPassword || "Passwords do not match";
  };
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign in</h2>
          <span>register and enjoy the service</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("username")}
              placeholder="username"
            />
            <input
              type="password"
              {...register("password", { required: true, minLength: 8 })}
              placeholder="password"
            />
            {errors.password?.type === "required" && "Password is Required"}
            {errors.password?.type === "minLength" &&
              "Password must be at least 8 characters"}
            <input
              type="password"
              {...register("confirmpwd", {
                required: true,
                validate: validatePassword,
              })}
              placeholder="confirm password"
            />
            {errors.confirmpwd?.type === "required" && "Password is Required"}
            {errors.confirmpwd && errors.confirmpwd.message}
            <input
              type="text"
              {...register("mobile", { required: true, maxLength: 12 })}
              placeholder="mobile number"
            />
            {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
            <button className="btn">Sign in</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="bgImg" />
        </div>
      </div>
    </section>
  );
}

// const validatePassword = (value) => {
//     const confirmPassword = watch("password");
//     return value === confirmPassword || "Passwords do not match";
//   };
