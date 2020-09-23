export interface ISimpleAction {
  type: string;
  payload: {
    index: number;
    value: boolean;
  };
}

export interface ITabProps {
  value: string;
  index: number;
  indexActive: number;
  sortTicketAction: Function;
}

export interface IContent {
  children: any;
}

export interface ITransferItem {
  index: number;
  value: string;
  transferSort: boolean[];
  transferItemAction: (payload: any) => any;
}

export interface ITicket {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета обратно
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    }
  ];
}
