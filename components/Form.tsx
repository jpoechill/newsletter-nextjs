import { useForm, FormProvider } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

interface InputValues {
  email: string;
}

interface Errors {
  email?: string;
}

export default function Form() {
  const methods = useForm()
  const router = useRouter()

  const [inputFields, setInputFields] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues: InputValues) => {
    let errors: Errors = {}

    if (!validateEmail(inputValues.email)) {
      errors.email = "Email is not valid.";
    }

    return errors;
  };

  const validateEmail = (email: string) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleChange = (e: any) => {
    const { target } = e
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(inputFields);
    router.push('/success?email=' + inputFields.email);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="container"
      >
        <div className="grid grid-cols-2 mt-10 py-2">
          <label htmlFor="email" className='font-bold text-xs'>Email address</label>
          {/* {errors.email ? (
            <label htmlFor="errormsg" className="error font-bold text-xs text-right text-red-500">
              Valid email required
            </label>
          ) : null} */}
        </div>
        <input
          type="email"
          name="email"
          value={inputFields.email}
          onChange={handleChange}
          className="border rounded-xl w-full h-[55px] p-5"
          placeholder="email@company.com"
        />
        <button type="submit" className="rounded-xl bg-[#242642] text-white font-bold w-full h-[55px] p-3 my-5 hover:text-blac hover:bg-gradient-to-r from-[#FA5076] to-[#F86739] hover:shadow-2xl hover:shadow-[#FF5E5C] hover:transition-all">Subscribe to monthly newsletter</button>
      </form>
    </FormProvider>


  )
}



