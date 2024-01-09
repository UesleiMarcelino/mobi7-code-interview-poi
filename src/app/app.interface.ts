export interface PoisDataModel {
  id: number;
  nome: string;
  raio: number;
  latitude: number;
  longitude: number;
}

export interface LocationDataModel {
  id: number;
  placa: string;
  data: string;
  velocidade: number;
  latitude: number;
  longitude: number;
  ignicao: boolean;
}

export interface ResultsModel {
  id: number;
  placaCar: string;
  data: string;
  nomePoi: string
}