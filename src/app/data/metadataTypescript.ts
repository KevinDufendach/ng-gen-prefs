export const metadata =
  [
    {
      field_name: 'include_all_adol',
      form_name: 'adolescent_preferences',
      section_header: '',
      field_type: 'radio',
      field_label: 'Would you like the option to receive results from genetic studies?',
      select_choices_or_calculations: '1, Yes, I do want the option to receive genetic results | 0, No, I do NOT want to receive any genetic results',
      field_note: 'Some people do not want to learn results from genetic studies.',
      text_validation_type_or_show_slider_number: '',
      text_validation_min: '',
      text_validation_max: '',
      identifier: '',
      branching_logic: '',
      required_field: '',
      custom_alignment: '',
      question_number: '',
      matrix_group_name: '',
      matrix_ranking: '',
      field_annotation: 'All Results'
    },
    {
      field_name: 'preventable_adol',
      form_name: 'adolescent_preferences',
      section_header: '',
      field_type: 'radio',
      field_label: 'Preventability: Do you want to receive results both for conditions that are preventable and for conditions that are not preventable?',
      select_choices_or_calculations: '1, Yes, I want to receive results both for conditions that are preventable and for conditions that are not preventable | 0, No, I only want to receive results for conditions that are preventable',
      field_note: 'Preventable conditions have some treatment, therapy or lifestyle change that can be made to help prevent or avoid symptoms, or reduce risk.',
      text_validation_type_or_show_slider_number: '',
      text_validation_min: '',
      text_validation_max: '',
      identifier: '',
      branching_logic: '',
      required_field: '',
      custom_alignment: '',
      question_number: '',
      matrix_group_name: '',
      matrix_ranking: '',
      field_annotation: 'Preventable'
    },
    {
      field_name: 'treatable_adol',
      form_name: 'adolescent_preferences',
      section_header: '',
      field_type: 'radio',
      field_label: 'Treatability: Do you want to receive results both for conditions that are treatable and for conditions that are not treatable?',
      select_choices_or_calculations: '1, Yes, I want to receive results both for conditions that are treatable and for conditions that are not treatable | 0, No, I only want to receive results for conditions that are treatable',
      field_note: 'Once conditions occur, they might be treatable. Treatable conditions have medications, therapies or lifestyle changes that can reduce symptoms or cure diseases.',
      text_validation_type_or_show_slider_number: '',
      text_validation_min: '',
      text_validation_max: '',
      identifier: '',
      branching_logic: '',
      required_field: '',
      custom_alignment: '',
      question_number: '',
      matrix_group_name: '',
      matrix_ranking: '',
      field_annotation: 'Treatable'
    },
    {
      field_name: 'adult_onset_adol',
      form_name: 'adolescent_preferences',
      section_header: '',
      field_type: 'radio',
      field_label: 'Adult-Onset: Do you want to receive results for adult-onset conditions for which there is no prevention or treatment during childhood? (e.g. breast cancer or adult-onset colon cancer)',
      select_choices_or_calculations: '1, Yes, I want to receive results for adult-onset conditions for which there is no prevention or treatment during childhood. | 0, No, I only want to receive results for conditions that are preventable or treatable during childhood',
      field_note: '',
      text_validation_type_or_show_slider_number: '',
      text_validation_min: '',
      text_validation_max: '',
      identifier: '',
      branching_logic: '',
      required_field: '',
      custom_alignment: '',
      question_number: '',
      matrix_group_name: '',
      matrix_ranking: '',
      field_annotation: 'Adult Onset'
    },
    {
      field_name: 'carrier_adol',
      form_name: 'adolescent_preferences',
      section_header: '',
      field_type: 'radio',
      field_label: 'Carrier Status: Do you want to receive results if you are a carrier for a condition but you will not develop the condition yourself?',
      select_choices_or_calculations: '1, Yes, I want to receive results if I am a carrier | 0, No, I only want to receive results if I will develop the condition myself',
      field_note: 'Some genetic conditions are caused by gene variations inherited from both parents. A carrier inherits a gene variation from only one parent. Carriers are not at risk for developing the genetic condition but may be at risk for having children with the genetic condition.',
      text_validation_type_or_show_slider_number: '',
      text_validation_min: '',
      text_validation_max: '',
      identifier: '',
      branching_logic: '',
      required_field: '',
      custom_alignment: '',
      question_number: '',
      matrix_group_name: '',
      matrix_ranking: '',
      field_annotation: 'Carrier Status'
    },
    {
      field_name: 'parental_involve_adol',
      form_name: 'adolescent_preferences',
      section_header: '',
      field_type: 'radio',
      field_label: 'Parent/Caregiver Involvement: Who do you want to make choices about what types of genetic test results to receive?',
      select_choices_or_calculations: '1, I want to make my own choices | 2, I want my parent/caregiver(s) to make these choices for me | 3, I want to make my choices with my parent/caregiver(s)',
      field_note: 'Some adolescents find these choices too difficult or too overwhelming. Some adolescents want their parents to make these choices for them. ',
      text_validation_type_or_show_slider_number: '',
      text_validation_min: '',
      text_validation_max: '',
      identifier: '',
      branching_logic: 'FALSE',
      required_field: '',
      custom_alignment: '',
      question_number: '',
      matrix_group_name: '',
      matrix_ranking: '',
      field_annotation: ''
    },
    {
      field_name: 'manual_include_adol',
      form_name: 'adolescent_preferences',
      section_header: '',
      field_type: 'checkbox',
      field_label: 'Always INCLUDE these conditions',
      select_choices_or_calculations: 'CAH, 21-hydroxylase Deficient Congenital Adrenal Hyperplasia | AORTA, Connective tissue disorders with serious bleeding risk | A1AT, Alpha-1 antitrypsin deficiency | ARRHYTHMIA, Arrhythmia syndromes with risk for sudden cardiac death | BLOOM, Cancer that might start during childhood or adulthood | BREASTCA, Cancer that might start during adulthood - preventable | CARN, metabolism disorders | CPVT, Arrhythmia syndromes with risk for sudden cardiac death | COLONCA, Cancer that might start during adulthood - preventable | COWDEN, Cowden syndrome | CF, Cystic Fibrosis | EDS, Ehlers Danlos syndrome | EDSVASC, Connective tissue disorders with serious bleeding risk | FABRY, Fabry disease | FVLT, Factor 5 Leiden thrombophilia | FHCHOL, Familial hypercholesterolemia | FMF, Familial Mediterranean fever | FMTC, cancers that might start during childhood or adulthood- preventable | FLUOROPYRIMIDINE, Fluoropyrimidine toxicity | GSD1, metabolism disorders | HEMIMIGRAINEATAXIA, Hemiplegic migraine and sporadic ataxia | FRUCT, metabolism disorders | HEMOCHROMATOSIS, Hereditary hemochromatosis | HHT, Hereditary hemorrhagic telangiectasia syndrome | HPPS, Cancers that might start during childhood or adulthood | HCM, Hypertrophic cardiomyopathy, dilated cardiomyopathy with risk for sudden cardiac death | IMMUNODF, Immunodeficiency | LIFRMNI, cancers that might start during childhood or adulthood | LOEYSDIETZ, Connective tissue disorders with serious bleeding risk | XYINFERT, Male infertility | MHT, Malignant hyperthermia susceptibility | MSUD, metabolism disorders | MARFAN, Connective tissue disorders with serious bleeding risk | MATUREDBM, Maturity onset diabetes in the young | MCAD, metabolism disorders | MEN1, cancers that might start during childhood or adulthood | MEN2, cancers that might start during childhood or adulthood- preventable | NF2, Neurofibromatosis Type 2 | OTCD, Ornithine transcarbamylase deficiency | OSTEOPET, osteopetrosis | OVARIANCA, cancers that might start during adulthood - preventable | PANCRCA, cancers that might start during adulthood | PEUTZJEGHERS, Cancers that might start during childhood or adulthood | FPS, polyposis syndromes that can start in childhood or adulthood and increase the risk for colon cancer | PPHN, Primary pulmonary hypertension | PROSTATECA, cancers that might start during adulthood | RB, Retinoblastoma | TS, Tuberous sclerosis | TYR1, metabolism disorders | VHL, cancers that might start during childhood or adulthood | WILMS, Wilms tumor',
      field_note: '',
      text_validation_type_or_show_slider_number: '',
      text_validation_min: '',
      text_validation_max: '',
      identifier: '',
      branching_logic: 'FALSE',
      required_field: '',
      custom_alignment: '',
      question_number: '',
      matrix_group_name: '',
      matrix_ranking: '',
      field_annotation: ''
    },
    {
      field_name: 'manual_exclude_adol',
      form_name: 'adolescent_preferences',
      section_header: '',
      field_type: 'checkbox',
      field_label: 'Always EXCLUDE these conditions',
      select_choices_or_calculations: 'CAH, 21-hydroxylase Deficient Congenital Adrenal Hyperplasia | AORTA, Connective tissue disorders with serious bleeding risk | A1AT, Alpha-1 antitrypsin deficiency | ARRHYTHMIA, Arrhythmia syndromes with risk for sudden cardiac death | BLOOM, Cancer that might start during childhood or adulthood | BREASTCA, Cancer that might start during adulthood - preventable | CARN, metabolism disorders | CPVT, Arrhythmia syndromes with risk for sudden cardiac death | COLONCA, Cancer that might start during adulthood - preventable | COWDEN, Cowden syndrome | CF, Cystic Fibrosis | EDS, Ehlers Danlos syndrome | EDSVASC, Connective tissue disorders with serious bleeding risk | FABRY, Fabry disease | FVLT, Factor 5 Leiden thrombophilia | FHCHOL, Familial hypercholesterolemia | FMF, Familial Mediterranean fever | FMTC, cancers that might start during childhood or adulthood- preventable | FLUOROPYRIMIDINE, Fluoropyrimidine toxicity | GSD1, metabolism disorders | HEMIMIGRAINEATAXIA, Hemiplegic migraine and sporadic ataxia | FRUCT, metabolism disorders | HEMOCHROMATOSIS, Hereditary hemochromatosis | HHT, Hereditary hemorrhagic telangiectasia syndrome | HPPS, Cancers that might start during childhood or adulthood | HCM, Hypertrophic cardiomyopathy, dilated cardiomyopathy with risk for sudden cardiac death | IMMUNODF, Immunodeficiency | LIFRMNI, cancers that might start during childhood or adulthood | LOEYSDIETZ, Connective tissue disorders with serious bleeding risk | XYINFERT, Male infertility | MHT, Malignant hyperthermia susceptibility | MSUD, metabolism disorders | MARFAN, Connective tissue disorders with serious bleeding risk | MATUREDBM, Maturity onset diabetes in the young | MCAD, metabolism disorders | MEN1, cancers that might start during childhood or adulthood | MEN2, cancers that might start during childhood or adulthood- preventable | NF2, Neurofibromatosis Type 2 | OTCD, Ornithine transcarbamylase deficiency | OSTEOPET, osteopetrosis | OVARIANCA, cancers that might start during adulthood - preventable | PANCRCA, cancers that might start during adulthood | PEUTZJEGHERS, Cancers that might start during childhood or adulthood | FPS, polyposis syndromes that can start in childhood or adulthood and increase the risk for colon cancer | PPHN, Primary pulmonary hypertension | PROSTATECA, cancers that might start during adulthood | RB, Retinoblastoma | TS, Tuberous sclerosis | TYR1, metabolism disorders | VHL, cancers that might start during childhood or adulthood | WILMS, Wilms tumor',
      field_note: '',
      text_validation_type_or_show_slider_number: '',
      text_validation_min: '',
      text_validation_max: '',
      identifier: '',
      branching_logic: 'FALSE',
      required_field: '',
      custom_alignment: '',
      question_number: '',
      matrix_group_name: '',
      matrix_ranking: '',
      field_annotation: ''
    },
    {
      field_name: 'man_incl_car_adol',
      form_name: 'adolescent_preferences',
      section_header: '',
      field_type: 'checkbox',
      field_label: 'Always INCLUDE these conditions if carrier',
      select_choices_or_calculations: 'CAH, 21-hydroxylase Deficient Congenital Adrenal Hyperplasia | AORTA, Connective tissue disorders with serious bleeding risk | A1AT, Alpha-1 antitrypsin deficiency | ARRHYTHMIA, Arrhythmia syndromes with risk for sudden cardiac death | BLOOM, Cancer that might start during childhood or adulthood | BREASTCA, Cancer that might start during adulthood - preventable | CARN, metabolism disorders | CPVT, Arrhythmia syndromes with risk for sudden cardiac death | COLONCA, Cancer that might start during adulthood - preventable | COWDEN, Cowden syndrome | CF, Cystic Fibrosis | EDS, Ehlers Danlos syndrome | EDSVASC, Connective tissue disorders with serious bleeding risk | FABRY, Fabry disease | FVLT, Factor 5 Leiden thrombophilia | FHCHOL, Familial hypercholesterolemia | FMF, Familial Mediterranean fever | FMTC, cancers that might start during childhood or adulthood- preventable | FLUOROPYRIMIDINE, Fluoropyrimidine toxicity | GSD1, metabolism disorders | HEMIMIGRAINEATAXIA, Hemiplegic migraine and sporadic ataxia | FRUCT, metabolism disorders | HEMOCHROMATOSIS, Hereditary hemochromatosis | HHT, Hereditary hemorrhagic telangiectasia syndrome | HPPS, Cancers that might start during childhood or adulthood | HCM, Hypertrophic cardiomyopathy, dilated cardiomyopathy with risk for sudden cardiac death | IMMUNODF, Immunodeficiency | LIFRMNI, cancers that might start during childhood or adulthood | LOEYSDIETZ, Connective tissue disorders with serious bleeding risk | XYINFERT, Male infertility | MHT, Malignant hyperthermia susceptibility | MSUD, metabolism disorders | MARFAN, Connective tissue disorders with serious bleeding risk | MATUREDBM, Maturity onset diabetes in the young | MCAD, metabolism disorders | MEN1, cancers that might start during childhood or adulthood | MEN2, cancers that might start during childhood or adulthood- preventable | NF2, Neurofibromatosis Type 2 | OTCD, Ornithine transcarbamylase deficiency | OSTEOPET, osteopetrosis | OVARIANCA, cancers that might start during adulthood - preventable | PANCRCA, cancers that might start during adulthood | PEUTZJEGHERS, Cancers that might start during childhood or adulthood | FPS, polyposis syndromes that can start in childhood or adulthood and increase the risk for colon cancer | PPHN, Primary pulmonary hypertension | PROSTATECA, cancers that might start during adulthood | RB, Retinoblastoma | TS, Tuberous sclerosis | TYR1, metabolism disorders | VHL, cancers that might start during childhood or adulthood | WILMS, Wilms tumor',
      field_note: '',
      text_validation_type_or_show_slider_number: '',
      text_validation_min: '',
      text_validation_max: '',
      identifier: '',
      branching_logic: 'FALSE',
      required_field: '',
      custom_alignment: '',
      question_number: '',
      matrix_group_name: '',
      matrix_ranking: '',
      field_annotation: ''
    },
    {
      field_name: 'man_excl_car_adol',
      form_name: 'adolescent_preferences',
      section_header: '',
      field_type: 'checkbox',
      field_label: 'Always EXCLUDE these conditions if carrier',
      select_choices_or_calculations: 'CAH, 21-hydroxylase Deficient Congenital Adrenal Hyperplasia | AORTA, Connective tissue disorders with serious bleeding risk | A1AT, Alpha-1 antitrypsin deficiency | ARRHYTHMIA, Arrhythmia syndromes with risk for sudden cardiac death | BLOOM, Cancer that might start during childhood or adulthood | BREASTCA, Cancer that might start during adulthood - preventable | CARN, metabolism disorders | CPVT, Arrhythmia syndromes with risk for sudden cardiac death | COLONCA, Cancer that might start during adulthood - preventable | COWDEN, Cowden syndrome | CF, Cystic Fibrosis | EDS, Ehlers Danlos syndrome | EDSVASC, Connective tissue disorders with serious bleeding risk | FABRY, Fabry disease | FVLT, Factor 5 Leiden thrombophilia | FHCHOL, Familial hypercholesterolemia | FMF, Familial Mediterranean fever | FMTC, cancers that might start during childhood or adulthood- preventable | FLUOROPYRIMIDINE, Fluoropyrimidine toxicity | GSD1, metabolism disorders | HEMIMIGRAINEATAXIA, Hemiplegic migraine and sporadic ataxia | FRUCT, metabolism disorders | HEMOCHROMATOSIS, Hereditary hemochromatosis | HHT, Hereditary hemorrhagic telangiectasia syndrome | HPPS, Cancers that might start during childhood or adulthood | HCM, Hypertrophic cardiomyopathy, dilated cardiomyopathy with risk for sudden cardiac death | IMMUNODF, Immunodeficiency | LIFRMNI, cancers that might start during childhood or adulthood | LOEYSDIETZ, Connective tissue disorders with serious bleeding risk | XYINFERT, Male infertility | MHT, Malignant hyperthermia susceptibility | MSUD, metabolism disorders | MARFAN, Connective tissue disorders with serious bleeding risk | MATUREDBM, Maturity onset diabetes in the young | MCAD, metabolism disorders | MEN1, cancers that might start during childhood or adulthood | MEN2, cancers that might start during childhood or adulthood- preventable | NF2, Neurofibromatosis Type 2 | OTCD, Ornithine transcarbamylase deficiency | OSTEOPET, osteopetrosis | OVARIANCA, cancers that might start during adulthood - preventable | PANCRCA, cancers that might start during adulthood | PEUTZJEGHERS, Cancers that might start during childhood or adulthood | FPS, polyposis syndromes that can start in childhood or adulthood and increase the risk for colon cancer | PPHN, Primary pulmonary hypertension | PROSTATECA, cancers that might start during adulthood | RB, Retinoblastoma | TS, Tuberous sclerosis | TYR1, metabolism disorders | VHL, cancers that might start during childhood or adulthood | WILMS, Wilms tumor',
      field_note: '',
      text_validation_type_or_show_slider_number: '',
      text_validation_min: '',
      text_validation_max: '',
      identifier: '',
      branching_logic: 'FALSE',
      required_field: '',
      custom_alignment: '',
      question_number: '',
      matrix_group_name: '',
      matrix_ranking: '',
      field_annotation: ''
    }
  ];
