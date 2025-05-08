import {
  MdAddCircleOutline,
  MdCheckCircleOutline,
} from "react-icons/md";
import { Icon } from "@inubekit/inubekit";
import { ITitle } from "../props";

const titlesMock: ITitle[] = [
  {
    id: "systemValidations",
    titleName: "Validaciones del sistema",
    priority: 0,
  },
  {
    id: "requirements",
    titleName: "",
    priority: 0,
  },
];

const actionsMock = [
  {
    id: "details",
    actionName: "Más Detalles",
    disabled: () => false,
    content: (entry: any, onActionClick: (actionId: string, e: any) => void) => (
      <Icon
        appearance="primary"
        icon={<MdAddCircleOutline />}
        size="16px"
        cursorHover
        onClick={() => onActionClick("details", entry)}
      />
    ),
  },
  {
    id: "approvals",
    actionName: "Aprobaciones",
    disabled: (entry: any) =>
      entry.group === "Requisitos documentales" &&
      entry.requirements === "Sin Evaluar",
    content: (entry: any, onActionClick: (actionId: string, e: any) => void) => {
      const isDisabled =
        entry.group === "Requisitos documentales" &&
        entry.requirements === "Sin Evaluar";

      return (
        <Icon
          appearance="primary"
          icon={<MdCheckCircleOutline />}
          size="16px"
          disabled={isDisabled}
          cursorHover={!isDisabled}
          onClick={() => onActionClick("approvals", entry)}
        />
      );
    },
  },
];

const breakPointsMock = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 3 },
  { breakpoint: "(max-width: 850px)", totalColumns: 1 },
];

const entriesMock = [
  {
    id: "1",
    group: "Validaciones del sistema",
    systemValidations: "Que el asociado sea activo",
    requirements: "Cumple",
    executionDate: "2024/05/15",
  },
  {
    id: "2",
    group: "Validaciones del sistema",
    systemValidations: "Que este al día en las obligaciones",
    requirements: "Cumple",
    executionDate: "2024/05/09",
  },
  {
    id: "3",
    group: "Validaciones del sistema",
    systemValidations: "Que tenga más de 30 años",
    requirements: "No Cumple",
    executionDate: "2024/05/11",
  },
  {
    id: "4",
    group: "Requisitos documentales",
    systemValidations: "Imagen de la cédula",
    requirements: "Cumple",
    executionDate: "2024/05/12",
  },
  {
    id: "5",
    group: "Requisitos documentales",
    systemValidations: "Desprendible de pago",
    requirements: "Sin Evaluar",
    executionDate: "2024/05/13",
  },
  {
    id: "6",
    group: "Requisitos documentales",
    systemValidations: "Declaración de renta",
    requirements: "Sin Evaluar",
    executionDate: "2024/05/14",
  },
  {
    id: "7",
    group: "Validaciones humanas",
    systemValidations: "Referencial laborales",
    requirements: "Cumple",
    executionDate: "2024/05/16",
  },
  {
    id: "8",
    group: "Validaciones humanas",
    systemValidations: "Proponer un codeudor",
    requirements: "No Cumple",
    executionDate: "2024/05/17",
  },
];

export {
  titlesMock,
  actionsMock,
  breakPointsMock,
  entriesMock,
};
