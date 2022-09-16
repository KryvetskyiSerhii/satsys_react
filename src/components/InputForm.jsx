import { ErrorBlock, FormButton, FormInput, FormStyled } from "../App.styled";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

export const InputForm = ({ setSearchResult, setIsLoading }) => {
  const [touched, setTouched] = useState(false);

  const initialValues = {
    searchValue: "",
  };

  const validationSchema = Yup.object({
    searchValue: Yup.string()
      .max(100, "Must be no more than 100 characters")
      .required("This field is required")
      .matches(/http/, "Should contain http request"),
  });

  const fetchTheBackEndData = async (values) => {
    setIsLoading(true);
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/${values.searchValue}`
    );
    setIsLoading(false);
    setSearchResult(response.data.dict);
    console.log(response.data);
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (value) => {
      await fetchTheBackEndData(value);
    },
    validationSchema: validationSchema,
  });

  return (
    <>
      <FormStyled onSubmit={formik.handleSubmit}>
        <FormInput
          placeholder="Enter the hostname"
          name="searchValue"
          onChange={formik.handleChange}
          onBlur={() => setTouched(true)}
        />

        <FormButton>Search</FormButton>
      </FormStyled>
      {touched && formik.errors.searchValue && (
        <ErrorBlock>{formik.errors.searchValue}</ErrorBlock>
      )}
    </>
  );
};
