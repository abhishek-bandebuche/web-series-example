<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body onload="init();">
    <ul id="todoItems"></ul>
    <form method="post" onsubmit="addToDo(); return false;">
        <input type="text" name="todo" id="todo" placeholder="What you want to do?" style="width: 200px;" />
        <input type="submit" value="Add Item" />
    </form>

    <script>
        var html5 = {};
        html5.indexedDB = {};
        html5.indexedDB.db = null;

        html5.indexedDB.onError = function (err) {
            console.error(err);
        }

        html5.indexedDB.open = function () {
            var version = "1";
            var request = window.indexedDB.open("JustDB", version);

            request.onupgradeneeded = function (e) {
                var db = e.target.result;
                e.target.transaction.onerror = html5.indexedDB.onError;
                var store = db.createObjectStore("todo", { keyPath: "timeStamp" });
            }

            request.onsuccess = function (e) {
                html5.indexedDB.db = e.target.result;
                html5.indexedDB.getAllItems();
            }
        };

        html5.indexedDB.addTodo = function (todoText) {
            var db = html5.indexedDB.db;
            var trans = db.transaction(["todo"], "readwrite");
            var store = trans.objectStore("todo");

            var data = { "text": todoText, "timeStamp": new Date().getTime() };

            try {
                var request = store.add(data);
            }
            catch (e) {
                console.log(e);
            }

            request.onsuccess = function () {
                html5.indexedDB.getAllItems();
            };

            request.onerror = html5.indexedDB.onError;
        };

        html5.indexedDB.getAllItems = function () {
            var todos = document.getElementById("todoItems");
            todos.innerHTML = "";
            var db = html5.indexedDB.db;
            var trans = db.transaction(["todo"], "readwrite");
            var store = trans.objectStore("todo");

            var cRequest = store.openCursor();

            cRequest.onsuccess = function (e) {
                var result = e.target.result;

                if (!!result == false)
                    return;

                renderTodo(result.value);
                result.continue();
            }
        };

        function addToDo() {
            var todo = document.getElementById("todo");
            html5.indexedDB.addTodo(todo.value);
            todo.value = "";
        };

        function init() {
            html5.indexedDB.open();
        };

        function renderTodo(data) {
            var todos = document.getElementById("todoItems");
            var li = '<li>' + data.text + '</li>';
            todos.innerHTML += li;
        };
    </script>
</body>

</html>