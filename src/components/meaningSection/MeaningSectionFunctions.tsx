import {Definitions} from '../meaning/MeaningInterfaces'
export function definition(p: string, definitions: Definitions){

        if(p == 'noun'.trim()){
            return definitions.noun.d
        }
        if(p == 'pronoun'.trim()){
            return definitions.pronoun.d
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
export function example(p: string, definitions: Definitions){

        if(p == 'noun'.trim()){
            return definitions.noun.ex
        }
        else if(p == 'verb'.trim()){
            return definitions.verb.ex
        }
        else if(p == 'adverb'.trim()){
            return definitions.adverb.ex
        }
        else if(p == 'adjective'.trim()){
            return definitions.adjective.ex
        }
        else if(p == 'preposition'.trim()){
            return definitions.preposition.ex
        }
        else if(p == 'conjunction'.trim()){
            return definitions.conjunction.ex
        }
        else if(p == 'interjection'.trim()){
            return definitions.interjection.ex
        }

    }