import { useState } from 'react';

import './App.css';
import './custom.css';

//comps
import TextBoxList from './components/TextBoxList';

function App() {
  const [LastNameFirst, setLastNameFirst] = useState<boolean>(false);

  const [FirstNames, setFirstNames] = useState<Array<string>>(['']);
  const [MiddleNames, setMiddleNames] = useState<Array<string>>(['']);
  const [LastNames, setLastNames] = useState<Array<string>>(['']);
  const [NickNames, setNickNames] = useState<Array<string>>(['']);
  const [SirNames, setSirNames] = useState<Array<string>>(['']);

  const [Variations, setVariations] = useState<Array<string>>([]);

  function GenerateNameVariations() {
    const tempArray: Array<string> = [];
    LastNames.forEach((lName) => {
      FirstNames.forEach((fName) => {
        tempArray.push(`${fName} ${lName}`);
        tempArray.push(`${fName.charAt(0)} ${lName}`);
        if (LastNameFirst) {
          tempArray.push(`${lName}, ${fName}`);
        }

        MiddleNames.forEach((mName) => {
          tempArray.push(`${fName} ${mName} ${lName}`);
          tempArray.push(`${fName} ${mName.charAt(0)} ${lName}`);
          tempArray.push(`${fName.charAt(0)} ${mName} ${lName}`);
          tempArray.push(`${fName.charAt(0)} ${mName.charAt(0)} ${lName}`);

          if (LastNameFirst) {
            tempArray.push(`${lName}, ${fName} ${mName}`);
          }
        });

        SirNames.forEach((sName) => {
          tempArray.push(`${fName} ${lName} ${sName}`);
          tempArray.push(`${fName.charAt(0)} ${lName} ${sName}`);

          MiddleNames.forEach((mName) => {
            tempArray.push(`${fName} ${mName} ${lName} ${sName}`);
            tempArray.push(`${fName.charAt(0)} ${mName.charAt(0)} ${lName} ${sName}`);
            tempArray.push(`${fName} ${mName.charAt(0)} ${lName} ${sName}`);
            tempArray.push(`${fName.charAt(0)} ${mName} ${lName} ${sName}`);
          });
        });
      });

      NickNames.forEach((nName) => {
        tempArray.push(`${nName} ${lName}`);
        if (LastNameFirst) {
          tempArray.push(`${lName}, ${nName}`);
        }

        MiddleNames.forEach((mName) => {
          tempArray.push(`${nName} ${mName} ${lName}`);
          tempArray.push(`${nName} ${mName.charAt(0)} ${lName}`);
        });

        SirNames.forEach((sName) => {
          tempArray.push(`${nName} ${lName} ${sName}`);

          MiddleNames.forEach((mName) => {
            tempArray.push(`${nName} ${mName} ${lName} ${sName}`);
            tempArray.push(`${nName} ${mName.charAt(0)} ${lName} ${sName}`);
          });
        });
      });
    });
    // if (LastNameFirst) {
    //   tempArray.push(`${lName}, ${fName} ${nName} ${mName} `);
    // } else {
    // }

    setVariations(tempArray);
  }

  return (
    <>
      <h1>Name Variations</h1>
      <div className={`flexRow centered`}>
        <p>
          <input
            type={`checkbox`}
            checked={LastNameFirst}
            onChange={(e) => {
              setLastNameFirst(e.target.checked);
            }}
          />
          Borrower is signing last name first
        </p>
      </div>
      <div className={`flexRow centered`}>
        <span className={`flexCol`}>
          <TextBoxList titleText={`First Name`} Names={FirstNames} setNames={setFirstNames} />
        </span>
        <span className={`flexCol`}>
          <TextBoxList titleText={`Nickname`} Names={NickNames} setNames={setNickNames} />
        </span>
        <span className={`flexCol`}>
          <TextBoxList titleText={`Middle Name`} Names={MiddleNames} setNames={setMiddleNames} />
        </span>
        <span className={`flexCol`}>
          <TextBoxList titleText={`Last Name`} Names={LastNames} setNames={setLastNames} />
        </span>
        <span className={`flexCol`}>
          <TextBoxList titleText={`Sir Name`} Names={SirNames} setNames={setSirNames} />
        </span>
      </div>

      <div id={`outputArea`} className={`flexRow centered`}>
        <button onClick={GenerateNameVariations}>Generate Name Variations</button>
      </div>
      <div className={`flexRow centered wrap`}>
        {Variations.length > 0 && (
          <>
            {Variations?.map((Name: string, i: number) => (
              <>
                <span key={i}>{Name};</span>
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default App;
