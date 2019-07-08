
export enum Organ {
  ADRENAL,
  VESSEL,
  JOINT,
  BONE,
  BRAIN,
  NERVE,
  CANCER,
  GI,
  COLON,
  EYE,
  HEART,
  KIDNEY,
  IMMUNE,
  PAIN,
  PANCREAS,
  LUNG,
  LIVER,
  MUSCLE,
  STOMACH,
  TUMOR,
  MEDICINE,
  VASDEFERENS,
  METABOLIC,
  MULTIPLE
}

export class Condition {
  id: string;
  return_phenotype: string;
  condition: string;
  organs: Organ[];
  description: string;
  preventable: boolean;
  treatable: boolean;
  adult_onset: boolean;
  developmental?: boolean;
  degenerative?: boolean;
  carrier: {
    value: boolean,
    label: string
  };
  genes?: string;
  caw_approved?: string;
  snv_references?: string;
  sorted_by?: Organ;
}
