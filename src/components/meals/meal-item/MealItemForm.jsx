import React, { useContext, useState } from "react"
import styled from "styled-components"
import Button from "../../UI/Button"
import { BasketContext } from "../../store/BasketContext"
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus-icon.svg"

const MealItemForm = ({ id, title, price }) => {
  const { addToBasket } = useContext(BasketContext)
  const [amount, setAmount] = useState(1)

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const basketItem = {
      id,
      price,
      title,
      amount,
    }
    addToBasket(basketItem)
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <Container>
        <label htmlFor={id}>Amount</label>
        <StyledInput
          value={amount}
          onChange={amountChangeHandler}
          type="number"
          id={id}
          min={1}
          max={5}
          defaultValue={1}
        />
      </Container>
      <Button>
        <StyledIcon />
        Add
      </Button>
    </StyledForm>
  )
}

export default MealItemForm

const StyledInput = styled.input`
  width: 3.75rem;
  height: 2rem;
`
const StyledIcon = styled(PlusIcon)`
  margin-right: 10px;
`

const Container = styled.div`
  margin-bottom: 15px;

  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin-right: 20px;
  }
  input {
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    outline: none;
    padding: 4px 12px;
    font-weight: 500px;
    font-size: 16px;
    line-height: 24px;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
