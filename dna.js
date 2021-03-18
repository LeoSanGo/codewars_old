return dna_string.replace('A', 't').replace('T', 'a').replace('C', 'g').replace('G', 'c').upper()[::-1]
/*
 DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA"
*/