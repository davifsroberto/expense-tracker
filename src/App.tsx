import { useState, useEffect } from "react";

import * as C from "./App.styles";
import { Item } from "./types/Item";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      categories[filteredList[i].category].expense
        ? (expenseCount += filteredList[i].value)
        : (incomeCount += filteredList[i].value);
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);

    console.log(newList);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Expense Tracker</C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />
      </C.Body>

      <C.Footer>
        © 2022 Expense Tracker - Practicing ReactJS <br />
        Desenvolvido por &nbsp;
        <C.Link
          href="https://www.linkedin.com/in/davifsroberto/"
          target="_blank"
        >
          Davi Roberto
        </C.Link>
      </C.Footer>
    </C.Container>
  );
};

export default App;
