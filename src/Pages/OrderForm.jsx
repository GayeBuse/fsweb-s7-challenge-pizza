import React from "react";
import "./OrderForm.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import { productData } from "../Datas/ProductData";
import Product from "../Components/Product";

export default function OrderForm(props) {
  const { handleSubmit, handleOrder } = props; //apiden alıyrum succestende çekebilirim 2. aşama için hazırlık
  const initialData = {
    title: "",
    price: 0,
    dough: "",
    size: "",
    rate: "",
    comment: "",
    description: "",
    extraIngredient: [],
    orderNotes: "",
    totalPrice: 0,
    counter: 1,
  };

  const extraIngredients = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Misir",
    "Sucuk",
    "Kanada Jambonu",
    "Kekik",
    "Ananas",
    "Tavuk Izgara",
    "Jalepano",
    "Kabak",
    "Sogan",
    "Sarimsak",
  ];

  const [formData, setFormData] = useState(initialData);
  const [isValid, setIsValid] = useState(false);
  const [extraIngredientPrice, setExtraIngredientPrice] = useState(0);
  const [errors, setErrors] = useState({ dough: "", extraIngredient: "" });
  const history = useHistory();

  const validateDough = (value) => {
    const validDoughOptions = ["Ince Hamur", "Orta Hamur", "Kalin Hamur"];
    return (
      validDoughOptions.includes(value) ||
      "Bir pizza hamur kalinliği seçmelisiniz."
    );
  };

  const validateSize = (value) => {
    const validSizeOptions = ["Kucuk", "Orta", "Buyuk"];
    return validSizeOptions.includes(value) || "Pizza boyutunu seciniz";
  };

  const validateExtraIngredients = (value) => {
    return value.length <= 10 || "En fazla 10 malzeme secebilirsiniz.";
  };
  useEffect(() => {
    const newFormEntries = { ...formData };
    newFormEntries.extraIngredientPrice = extraIngredientPrice;
    newFormEntries.totalPrice =
      newFormEntries.counter * productData[0].price + extraIngredientPrice;
    setFormData(newFormEntries);
  }, [extraIngredientPrice, formData.counter]);
  const validateForm = () => {
    const errors = {};

    if (!validateDough(formData.dough)) {
      errors.dough = "Bir pizza hamur kalınlığı seçmelisiniz.";
    }
    if (!validateSize(formData.size)) {
      errors.size = "Pizza boyutunu seçmelisiniz.";
    }
    if (!validateExtraIngredients(formData.extraIngredient)) {
      errors.extraIngredient = "En fazla 10 malzeme seçebilirsiniz.";
    }

    setIsValid(Object.keys(errors).length === 0);
    return errors;
  };

  const handleIncreasment = (event) => {
    event.preventDefault();
    setFormData((prevData) => ({ ...prevData, counter: prevData.counter + 1 }));
  };

  const handleDecreasment = (event) => {
    event.preventDefault();
    if (formData.counter > 1) {
      setFormData((prevData) => ({
        ...prevData,
        counter: prevData.counter - 1,
      }));
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    if (event.target.type === "checkbox") {
      const selectedIngredients = formData.extraIngredient.includes(name)
        ? formData.extraIngredient.filter((item) => item !== name)
        : [...formData.extraIngredient, name];

      if (selectedIngredients.length <= 10) {
        setFormData((prevData) => ({
          ...prevData,
          extraIngredient: selectedIngredients,
        }));
        setExtraIngredientPrice((prevPrice) =>
          value ? prevPrice + 5 : prevPrice - 5
        );
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          extraIngredient: "En fazla 10 malzeme seçebilirsiniz.",
        }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
      if (name === "dough" || name === "size") {
        const validationErrors = validateForm();
        setErrors((prevErrors) => ({ ...prevErrors, ...validationErrors }));
      }
    }

    const validationErrors = validateForm();
    const isValidForm = Object.keys(validationErrors).length === 0;
    setIsValid(isValidForm);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (!isValid) return;

    handleSubmit(formData);
    axios
      .post("https://reqres.in/api/users", formData)
      .then((res) => {
        handleOrder(res.data);
        history.push("/success");
      })
      .catch((err) => {
        console.error(err.response.message);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container">
      <img className="pızzaa" src="menu/abspizza.png" />
      <Product />
      <form onSubmit={handlerSubmit}>
        <div className="order-form">
          <div className="form-container">
            <div className="product-inches">
              <h3>
                Boyut Sec <span>*</span>
              </h3>
              <div className="">
                <input
                  type="radio"
                  name="size"
                  id="size-small"
                  value="Kucuk"
                  checked={formData.size === "Kucuk"}
                  onChange={handleChange}
                />
                <label htmlFor="size-small" className="size-margin">
                  Kucuk
                </label>
              </div>
              <div className="">
                <input
                  type="radio"
                  name="size"
                  id="size-medium"
                  value="Orta"
                  checked={formData.size === "Orta"}
                  onChange={handleChange}
                />
                <label htmlFor="size-medium" className="size-margin">
                  Orta
                </label>
              </div>
              <div className="">
                <input
                  type="radio"
                  name="size"
                  id="size-large"
                  value="Buyuk"
                  checked={formData.size === "Buyuk"}
                  onChange={handleChange}
                />
                <label htmlFor="size-large" className="size-margin">
                  Buyuk
                </label>
              </div>
              {errors.size && <p className="error-message">{errors.size}</p>}
            </div>
            <div className="dough-size dimension">
              <h3>
                Hamur Sec <span>*</span>
              </h3>
              <select
                name="dough"
                id="dough"
                value={formData.dough}
                onChange={handleChange}
              >
                <option value="">Hamur Kalinligi</option>
                <option value="Ince Hamur">Ince Hamur</option>
                <option value="Orta Hamur">Orta Hamur</option>
                <option value="Kalin Hamur">Kalin Hamur</option>
              </select>
              {errors.dough && (
                <p className="error-message">{errors.dough.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="ek-malzemeler">
          <h3>Ek Malzemeler</h3>
          <p>En Fazla 10 malzeme secebilirsiniz. 5₺</p>
          <div className="malzeme-selection">
            {extraIngredients.map((malz, i) => (
              <div className="malzeme" key={i}>
                <input
                  id={`ingredient-${i}`}
                  type="checkbox"
                  name={malz}
                  checked={formData.extraIngredient.includes(malz)}
                  onChange={handleChange}
                />
                <label className="size-margin" htmlFor={`ingredient-${i}`}>
                  {malz}
                </label>
              </div>
            ))}
          </div>
          {errors.extraIngredient && (
            <p className="error-message">{errors.extraIngredient}</p>
          )}
        </div>
        <div className="order-notes">
          <label htmlFor="order-notes">
            <h3>Siparis Notu</h3>
          </label>
          <input
            type="text"
            name="orderNotes"
            id="order-notes"
            value={formData.orderNotes}
            placeholder="Siparisine eklemek istedigin bir not var mi?"
            onChange={handleChange}
          />
        </div>
        <div className="cizgi"></div>
        <div className="common counter  wrap">
          <div className="counters ">
            <button className="dec" onClick={handleDecreasment}>
              -
            </button>
            <div className="touch ">{formData.counter}</div>
            <button className="inc" onClick={handleIncreasment}>
              +
            </button>
          </div>
          <div className="counters column border ">
            <h3>Siparis Toplami</h3>
            <div className="common buton total">
              <p>Secimler</p>
              <p>{extraIngredientPrice}₺</p>
            </div>
            <div className="common buton total">
              <p>
                <span>Toplam</span>
              </p>
              <p>
                <span>{formData.totalPrice}₺</span>
              </p>
            </div>
          </div>
        </div>
        <div className="submit-button">
          <button className="order-button" type="submit" disabled={!isValid}>
            Siparis Ver
          </button>
        </div>
      </form>
    </div>
  );
}
