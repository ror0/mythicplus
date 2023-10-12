async function getDungeonJSON() {
    const response = await fetch('');
    const data = await response.json();

    console.log(data);
}