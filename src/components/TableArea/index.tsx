import * as C from "./styles";
import { Item } from "../../types/Item";
import { TableItem } from "../TableItem/index";

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColum width={100}>Date</C.TableHeadColum>
          <C.TableHeadColum width={130}>Category</C.TableHeadColum>
          <C.TableHeadColum>Title</C.TableHeadColum>
          <C.TableHeadColum width={150}>Value</C.TableHeadColum>
        </tr>
      </thead>

      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};
