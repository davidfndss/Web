// ----------------------------------------------
// Group 1 (Genesis): Genesis
// Group 2 (Mosaic Law Divison): Exodus - Deuteronomy
// Group 3 (Historical Books Division): Joshua - Esther
// Group 4 (The Wisdom Books Division): Job - Song of Songs
// Group 5 (Prophets Division): Isaiah - Malachi
// Group 6 (Gospels Division): Matthew - John
// Group 7 (Acts Division): Acts
// Group 8 (The Epistles Disivision): Romans - Ju
// Group 9 (The Revelation Division): Revelation
// ----------------------------------------------

export default function FindBookgroupDivisionByIndex(index: number): number | null {

    if (index === 0) return 1;                         // Genesis
    else if (index >= 1 && index <= 4) return 2;       // Exodus - Deuteronomy
    else if (index >= 5 && index <= 12) return 3;      // Joshua - Esther
    else if (index >= 13 && index <= 22) return 4;     // Job - Song of Songs
    else if (index >= 23 && index <= 38) return 5;     // Isaiah - Malachi
    else if (index >= 39 && index <= 42) return 6;     // Matthew - John
    else if (index === 43) return 7;                   // Acts
    else if (index >= 44 && index <= 64) return 8;     // Romans - Jude
    else if (index === 65) return 9;                   // Revelation

    return null;
}