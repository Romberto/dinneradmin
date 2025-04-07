import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputT } from "../../../utils/types";

export const CategoryForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputT>();

  const onSubmit = (data:InputT) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input {...register("category", { required: true })}></input>
        {errors.category && (
          <p className="text-red-600 text-sm ">обязательное поле</p>
        )}
      </label>
      <button className="btn">Добавить</button>

    </form>
  );
};
