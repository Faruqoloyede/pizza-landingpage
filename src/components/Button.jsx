const Button = (props) => {
  const text = props.text ?? "Order now"
  const styles = props.styles ?? "mr-0 mt-4"
  return (
    <button type='button' className={`bg-red text-white py-4 px-6 font-medium cursor-pointer rounded-[5px]  ${styles}`}>{text}</button>
  )
}

export default Button
