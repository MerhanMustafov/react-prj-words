import {Definitions} from '../../interface/Data'
export function definition(p: string, definitions: Definitions){

        if(p == 'noun'.trim()){
            return definitions.noun.d
        }
        else if(p == 'verb'.trim()){
            return definitions.verb.d
        }
        else if(p == 'adverb'.trim()){
            return definitions.adverb.d
        }
        else if(p == 'adjective'.trim()){
            return definitions.adjective.d
        }
        else if(p == 'preposition'.trim()){
            return definitions.preposition.d
        }
        else if(p == 'conjunction'.trim()){
            return definitions.conjunction.d
        }
        else if(p == 'interjection'.trim()){
            return definitions.interjection.d
        }

    }