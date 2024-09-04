type Props = {
  name: string;
  stringID: number;
  Names: Array<string>;
  setNames: React.Dispatch<React.SetStateAction<Array<string>>>;
};

function TextBox(props: Props) {
  const { name, stringID, Names, setNames } = props;
  function updateThisName(e: React.ChangeEvent<HTMLInputElement>) {
    const tempArray = Names;
    tempArray[stringID] = e.target.value;
    setNames(tempArray);
  }
  function removeRecord() {
    const tempArray = Names;
    tempArray.splice(stringID, 1);
    setNames([...tempArray]);
  }
  return (
    <>
      <input
        type='text'
        defaultValue={name}
        onChange={(e) => {
          updateThisName(e);
        }}
      />
      <button onClick={removeRecord}>X</button>
    </>
  );
}
export default TextBox;
