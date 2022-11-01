export const Button = (props) => {
  const { ButtonText, Icon } = props;
  return (
    <>
      <button className="text-white bg-[#EDB331] rounded-md lg:w-40 lg:py-2  text-center text-lg font-bold flex justify-evenly items-center xxs:p-2 xxs:w-40">
        {" "}
        <span>{ButtonText}</span> {Icon ? Icon : null}{" "}
      </button>
    </>
  );
};
