import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getBusinessesCity } from '../../store/business';
import { Redirect, useHistory } from 'react-router-dom';


const AutoComplete = ({ names }) => {
  const [inputVal, setInputVal] = useState("")
  const [showList, setShowList] = useState(false)
  const inputRef = React.useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (showList) {
      document.addEventListener('click', handleOutsideClick);
    }
    return (() => {
      console.log("Cleaning up event listener from Autocomplete!");
      document.removeEventListener('click', handleOutsideClick);
    })
  }, [showList])


  const handleInput = (e) => {
    setInputVal(e.target.value)
  }

  const selectName = ({ target: { innerText: name } }) => {
    setInputVal(name)
    setShowList(false)
  }

  // Set focus to input field if user clicks anywhere inside the Autocomplete
  // section (unless they have selected a name from the dropdown list)
  const handleAutocompleteSectionClick = ({ target }) => {
    if (!target.classList.contains("nameLi")) {
      inputRef.current.focus();
    }
  }

  const handleOutsideClick = () => {
    // Leave dropdown visible as long as input is focused
    if (document.activeElement === inputRef.current) return;
    else setShowList(false)
  }

  const submit = () => {
    // const payload = {
    //   city:inputVal
    // };
    // console.log('this is the payload',payload)
    // let foundBusinesses;
    // // try {
    // foundBusinesses = await dispatch(getBusinessesCity(payload));
    // } catch (error) {
    //   if (error instanceof ValidationError) setErrorMessages(error.errors);
    //   // If error is not a ValidationError, add slice at the end to remove extra
    //   // "Error: "
    //   else setErrorMessages({ overall: error.toString().slice(7) })
    // }
    // console.log('founded', foundBusinesses)
    // if (foundBusinesses) {
      //   setErrorMessages({});
      history.push(`/restaurants/location/${inputVal}`);
      // <Redirect to={`/restaurants/location/${inputVal}`}/>
    // }
  };
  const matchesFunc = () => {
    const inputLength = inputVal.length;
    const matches = [];

    if (inputLength === 0) return names;
    // console.log(typeof names)
    names.forEach(name => {

      const nameSegment = name.slice(0, inputLength);

      if (nameSegment.toLowerCase() === inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) matches.push('No matches');

    return matches;
  }

  const matchArray = matchesFunc();

  // console.log("this is the test", matchArray)

  const results = matchArray.map((result) => {
    const nodeRef = React.createRef();
    return (
      <CSSTransition
        nodeRef={nodeRef}
        key={result}
        classNames="result"
        timeout={{ enter: 500, exit: 300 }}
      >
        <li ref={nodeRef} className="nameLi" onClick={selectName}>
          {result}
        </li>
      </CSSTransition>
    )
  });

  return (
    <section
      className="autocomplete-section"
      onClick={handleAutocompleteSectionClick}
    >
      <div className="auto">
        <input
          placeholder="Search..."
          ref={inputRef}
          onChange={handleInput}
          value={inputVal}
          onFocus={() => setShowList(true)}
        />
        {showList && (
          <ul className="auto-dropdown">
            <TransitionGroup>
              {results}
            </TransitionGroup>
          </ul>
        )}
      </div>
      <button type="button" onClick={submit}>Go</button>
    </section>
  );

}

export default AutoComplete;
