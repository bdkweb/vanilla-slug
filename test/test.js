// Test cases for string-to-slug
const testCases = [
    { input: "Hello World", expected: "hello-world" },
    { input: "Café & Restaurant", expected: "cafe-and-restaurant" },
    { input: "Cộng hòa Việt Nam", expected: "cong-hoa-viet-nam" },
    { input: "Déjà vu", expected: "deja-vu" },
    { input: "Für Mäuse", expected: "fuer-maeuse" },
    { input: "Canción española", expected: "cancion-espanola" }
];

console.log("Running StringToSlug Tests...");

testCases.forEach((testCase, index) => {
    const result = _stringToSlug_API(testCase.input);
    const status = result === testCase.expected ? "✓ PASS" : "✗ FAIL";
    console.log(`${status} Test ${index + 1}: "${testCase.input}" -> "${result}"`);
});