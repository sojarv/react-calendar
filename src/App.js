import { useEffect, useState } from 'react';
import './App.scss';
import Calendar from './Components/Calendar';
import axios from 'axios';

const App = () => {
  /*
  year - trenutno izbrano leto, na zacetku je to trenutno leto (2021)
  month - trenutno izbran mesec, april na zacetku
  celebrations - vsi prazniki, ki so shranjeni v dates.txt
  */
  const [year, newYear] = useState(new Date().getFullYear());
  const [month, newMonth] = useState(new Date().getMonth());
  const [celebrations, setCelebrations] = useState([]);

  // Vsak mesec z zaporedno stevilko
  const months = [
    ['Januar', 0],
    ['Februar', 1],
    ['Marec', 2],
    ['April', 3],
    ['Maj', 4],
    ['Junij', 5],
    ['Julij', 6],
    ['Avgust', 7],
    ['September', 8],
    ['Oktober', 9],
    ['November', 10],
    ['December', 11],
  ];

  /**
   * V useEffect se s pomocjo axios.get dobi podatke o datumih v dates.txt
   */
  useEffect(() => {
    var text;
    axios.get('./dates.txt').then((res) => {
      // razdeli celotno datoteko na podlagi nove vrstice
      text = res.data.split('\n');
      // vsako vrstico razdeli še na podlagi separatorja ;
      text = text.map((item) => item.split(';'));
      // prve tri argumente (dan, mesec, leto) spremeni v stevilo
      text = text.map((item) => {
        item[0] = parseInt(item[0]);
        item[1] = parseInt(item[1]);
        item[2] = parseInt(item[2]);
        return item;
      });

      /**
       * nastavim text, ki je na koncu list of lists, kot state celebrations
       * Primer:
       * [[1,1,0,'Novo leto'], [15,4,2021,'Rok za oddajo']]
       * Ce je leto 0 -> dogodek se dogaja vsako leto.
       */

      setCelebrations(text);
    });
  }, []);

  /**
   * Na podlagi izbranega meseca in leta, filtira vse praznike v celebrations
   * Najprej se gleda, ce je pravi mesec, in potem tudi leto
   */
  const filteredCelebrations = celebrations.filter(
    (celebration) =>
      celebration[1] - 1 === parseInt(month) &&
      (celebration[2] === 0 || celebration[2] === parseInt(year))
  );

  /**
   * Za izbiro meseca se na podlagi seznama mesecev naredijo option za select komponento
   */
  const options = months.map((month) => (
    <option key={month[1]} value={month[1]}>
      {month[0]}
    </option>
  ));

  /**
   * Ko uporabnik izbere drug option v select, se posodobi mesec v month state
   */
  const changeMonthSelect = (event) => {
    newMonth(event.target.value);
  };

  /**
   * Ko uporabnik spremeni leto se posodobi leto v year state
   */
  const changeYear = (event) => {
    let value = event.target.value;

    // Ce je vnesena stevilka daljsa kot 4 simbole se skrajsa stevilo za eno mesto -> 23456 postane 3456
    if (value.length > 4) value = value.slice(1, 5);

    // V primeru ce je dolzina letnice manjsa kot 4 se dodajo na zacetku 0 -> 34 postane 0034
    while (value.length !== 4) {
      value = '0' + value;
    }
    newYear(value);
  };

  /**
   * Ce uporabnik spremeni mesec in leto v date komponenti.
   */
  const changeBoth = (event) => {
    let value = event.target.value;

    // Dobljen datum se loci na podlagi - -> 2021-04-05 postane [2021,04,05]
    let split = value.split('-');

    let year = split[0];
    // ce je dolzina letnice vecja kot 4 se skrajsa za eno mesto
    if (year.length > 4) year = year.slice(1, 5);

    let month = split[1];

    // Ce je katerikoli od vnesenih argumetnov 0 je leto 2021 in mesec 4
    if (isNaN(parseInt(year))) {
      year = 2021;
      month = 4;
    }

    newYear(year);
    newMonth(month - 1);
  };

  /**
   * Funckija ki na podlagi meseca in leta zgenerira datum, ki ga uporabi date input
   */

  const valueOfDate = (month, year) => {
    // shranjen mesec ima vedno manjso stevilo kot pa ga ima na koledarju -> Marec ima stevilo 2, zato ga je potrebno povecati
    let realMonth = parseInt(month) + 1;
    let result = realMonth;
    // ce ima mesec samo eno stevko, se mu doda 0 pred, da deluje
    if (realMonth < 10) result = '0' + realMonth;

    // vedno se vrne prvi dan v mesecu, saj je vazen vedno samo mesec in leto
    return year + '-' + result + '-01';
  };

  return (
    <div id="content">
      <div id="inputs">
        <div>
          <input
            type="date"
            value={valueOfDate(month, year)}
            id="date"
            onChange={changeBoth}
          />
        </div>
        <div>
          <select id="month-select" onChange={changeMonthSelect} value={month}>
            {options}
          </select>
          <input
            value={year}
            id="year-select"
            type="number"
            min="0001"
            max="9999"
            onChange={changeYear}
          />
        </div>
      </div>
      <table id="calendar">
        <thead>
          <tr>
            <th id="header-month" colSpan="7">
              {months[month][0]} {year}
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>Ponedeljek</th>
            <th>Torek</th>
            <th>Sreda</th>
            <th>Četrtek</th>
            <th>Petek</th>
            <th>Sobota</th>
            <th>Nedelja</th>
          </tr>
        </thead>
        <Calendar
          year={year}
          month={month}
          celebrations={filteredCelebrations}
        />
      </table>
    </div>
  );
};

export default App;
