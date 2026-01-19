var tesks = [];

const addTask = () => {
    const teskInput = document.getElementById("teskInput")
    const text = teskInput.value.trim()

    if (text) {
        tesks.push({ text: text, completed: false })
        teskInput.value = ""
        updateTesksList()
    }
};





const updateTesksList = () => {
    const tesklist = document.getElementById("tesk-list")
    tesklist.innerHTML = ""

    tesks.forEach((tesk, index) => {
        const listItem = document.createElement("li")

        listItem.innerHTML = `
    
        <div class="teskItem">
            <div class="tesk  ${tesk.completed ? 'completed' : ''} ">
                <input type="checkbox" class="checkbox" ${tesk.completed ? 'checked' : ""} />
                <p>${tesk.text}</p>
            </div>
            <div class="icons">
                <img src="./img/edit.png" onclick="editTask(${index})" />
                <img src="./img/bin.png"  onclick="deleteTask(${index})" />
            </div>
        </div>
         
         `
        listItem.addEventListener("change", () => toggleTaskcomplete(index))
        tesklist.append(listItem);
    })
}

document.getElementById("newTask").addEventListener("click", function (e) {
    e.preventDefault()

    addTask()
})
