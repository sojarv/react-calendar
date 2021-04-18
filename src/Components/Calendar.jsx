const Calendar = (props) => {
  /**
   * Funkcija, ki na podlagi prejetega meseca in leta zgenerira seznam dni v trenutnem meseceu
   * Ce se mesec zacne na katerikoli drug datum kot ponedeljek, doda potrebno stevilo dni iz prejsnjega meseca.
   * Prav tako je s koncem meseca. Ce se ne konca na nedeljo, potem doda potrebno stevilo dni prihodnjega meseca.
   */

  const newDate = (month, year) => {
    // month in year v Number, ker drugace jih uporabi kot String
    month = parseInt(month);
    year = parseInt(year);

    const date = new Date(year, month);

    // Podatki o trenutnem mesecu

    // Problem pri date je, da je v osnovi prvi dan v tednu nedelja, zato se to s preprosto zamenjavo spremeni da je prvi dan ponedeljek
    let changeDay = date.getDay() - 1;
    if (changeDay === -1) {
      changeDay = 6;
    }

    // Stevilo dni v izbranem mesecu
    const numberOfDays = new Date(year, month + 1, 0).getDate();

    // Podatki o prejsnjem mesecu
    // Stevilo dni v prejsnjem mesecu
    const prevDate = new Date(year, month - 1, 0).getDate();

    // prevMonthDays je seznam, ki se ga v primeru, da se trenutni mesec ne zacne v ponedeljek, napolni s pravim stevilom dni iz prejsnjega
    let prevMonthDays = [];
    for (let i = prevDate; i > prevDate - changeDay; i--) {
      prevMonthDays.unshift(i);
    }

    // dodam vse dneve trenutnega meseca dnevom prejsnjega
    let allDays = [];
    allDays = prevMonthDays;
    for (let i = 1; i <= numberOfDays; i++) {
      let value = i;
      // Vsak dan se pogleda ce je praznik - ce je, se element spremeni v seznam z vrednostima dan v mesecu in ime praznika - [8, 'Presernov dan']
      props.celebrations.map((event) => {
        if (event[0] === value) {
          value = [value, event[3]];
        }
        return value;
      });

      allDays.push(value);
    }

    // dnevi, ki jih dodam iz naslednjega meseca, dokler ne bo zadnji teden zapolnjen z dnevi naslednjega meseca - da bo stevilo deljivo s 7
    let addDays = 1;
    while (allDays.length % 7 !== 0) {
      allDays.push(addDays);
      addDays += 1;
    }

    // zaradi lazjega prikaza, se ta seznam razdeli na seznam seznamov. Vsak seznam znotraj predstavlja 1 teden
    let weeksBySeven = [];
    while (allDays.length) {
      weeksBySeven.push(allDays.splice(0, 7));
    }

    return weeksBySeven;
  };

  // Na podlagi meseca in leta, ki sta bila v komponento podana kot props se dobi podatke o trenutnem mesecu
  const newValues = newDate(props.month, props.year);

  /**
   * showValues je funkcija, ki na podlagi seznama tednov zgenerira vsebino tabele, ki predstavlja koledar
   */
  const showValues = newValues.map((row) => (
    // vsak teden je svoja tr v tabeli
    <tr key={row}>
      {row.map((item) => {
        let className = 'thisMonth'; // v osnovi se predvideva, da je dan iz tega meseca

        // v primeru, da je dan v prvi vrstici in je vecji od 20 ali pa je v zadnji vrstici in manjsi od 20 - pomeni da to ni element trenutnega meseca
        if (
          (newValues[0] === row && item > 20) ||
          (newValues[newValues.length - 1] === row && item < 20)
        ) {
          className = 'otherMonth';
        }

        // ce je element object, kar pomeni da je praznik, se doda className celebration
        if (typeof item === 'object') {
          className += ' celebration';
          // ob primeru praznika, se vrne tako dan kot tudi besedilo praznika
          return (
            <td className={className} key={item}>
              <span>{item[0]}</span>
              <p>{item[1]}</p>
            </td>
          );
        }
        // v primeru da je navaden dan, se vrne le stevilka dneva
        return (
          <td className={className} key={item}>
            {item}
          </td>
        );
      })}
    </tr>
  ));

  // Komponenta Calendar tako prikaze showValues, kar je koledar
  return <tbody id="calendar-body">{showValues}</tbody>;
};

export default Calendar;
