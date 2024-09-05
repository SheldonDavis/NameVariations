import TextBox from './TextBox';

type Props = {
  titleText: string;
  Names: Array<string>;
  setNames: React.Dispatch<React.SetStateAction<Array<string>>>;
};

function TextBoxList(props: Props) {
  const { titleText, Names, setNames } = props;

  function appendBlankName() {
    setNames([...Names, '']);
  }

  return (
    <>
      <label>{titleText}: </label>
      <span className={`tbWrapper`}>
        {Names.length > 0 && (
          <>
            {Names?.map((Name: string, i: number) => (
              <TextBox key={`${Name}_${i}`} name={Name} stringID={i} Names={Names} setNames={setNames} />
            ))}
          </>
        )}
      </span>
      <button onClick={appendBlankName}>Add a Name</button>
    </>
  );
}
export default TextBoxList;
