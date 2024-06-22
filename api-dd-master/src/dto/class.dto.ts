import { ProficiencyDTO } from './proficiency.dto';
import { SavingThrowDTO } from './saving-throw.dto';
import { EquipmentDTO } from './equipment.dto';

export class ClassDTO {
  index: string;
  name: string;
  hit_die: number;
  proficiency_choices: {
    desc: string;
    choose: number;
    type: string;
    from: {
      option_set_type: string;
      options: {
        option_type: string;
        item: ProficiencyDTO;
      }[];
    };
  }[];
  proficiencies: ProficiencyDTO[];
  saving_throws: SavingThrowDTO[];
  starting_equipment: {
    equipment: EquipmentDTO;
    quantity: number;
  }[];
  starting_equipment_options: {
    desc: string;
    choose: number;
    type: string;
    from: {
      option_set_type: string;
      options: {
        option_type: string;
        count?: number;
        of?: EquipmentDTO;
        choice?: {
          desc: string;
          choose: number;
          type: string;
          from: {
            option_set_type: string;
            equipment_category: {
              index: string;
              name: string;
              url: string;
            };
          };
        };
      }[];
    };
  }[];
  class_levels: string;
  multi_classing: {
    prerequisites: {
      ability_score: {
        index: string;
        name: string;
        url: string;
      };
      minimum_score: number;
    }[];
    proficiencies: ProficiencyDTO[];
  };
  subclasses: {
    index: string;
    name: string;
    url: string;
  }[];
  url: string;
}
