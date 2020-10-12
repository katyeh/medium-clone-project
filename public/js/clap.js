document.addEventListener('DOMContentLoaded', () => {
    const clapBtn = document.querySelector('.clapImg');
    clapBtn.addEventListener('click', async () => {
        clap();
        const res = await fetch('/api/:id/claps', {
            method: 'POST',
            body: JSON.stringify(story),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: `Bearer ${localStorage.getItem(
                    "READIUM_ACCESS_TOKEN"
                )}`,
            },
        })
    });
});

function clap() {
    const clapBtn = document.querySelector('.clapImg');

    if (clapBtn.src == "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIuMDIgNTEyLjAyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMi4wMiA1MTIuMDIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibS4wNDYgMTg2LjI2OGMyLjM2MiA0MC4xNTMgMi4xNjQgNzMuNDUgMS45ODkgMTAyLjgyOC0uNDYzIDc3Ljg4OC0xLjE4OCAxMjguNjM0IDUzLjU4MyAxODMuNDA1IDUyLjYzNSA1Mi42MzQgMTM4LjI4MSA1Mi42MzggMTkwLjkxOSAwIC4wMDEtLjAwMS4wMDEtLjAwMi4wMDItLjAwM2wxNDguNDktMTQ4LjQ5YzE3LjU4Ni0xNy41ODUgMTcuNTg5LTQ2LjA1MiAwLTYzLjY0LTMuNzE3LTMuNzE3LTcuOTI5LTYuNjQ3LTEyLjQyNC04Ljc4OWwyNC42MS0yNC42MWMxNy41NDUtMTcuNTQ1IDE3LjU0NS00Ni4wOTMgMC02My42NC00LjEzOC00LjEzOC04Ljg5Mi03LjI4Ny0xMy45NjYtOS40NzQgOS43ODItMTcuMDM4IDcuNTYtMzkuMzU5LTcuMjQ4LTU0LjE2Ni0zLjkxOS0zLjkxOS04LjM4OS02Ljk1Ni0xMy4xNjEtOS4xMjQgMTEuMTEzLTE3LjIzNSA5LjM1Mi00MC43MjgtNi4wNTItNTYuMTMxLTE0LjY1Mi0xNC42NTItMzYuOTcyLTE3LjA1Ny01NC4xNDEtNy4yNTMtMi4yMjUtNS4xNDQtNS40MTYtOS44NzgtOS40OTktMTMuOTYtMTcuNTQ0LTE3LjU0NS00Ni4wOTQtMTcuNTQ2LTYzLjYyLS4wMTktLjkxMi45MDgtNzkuMzgzIDc5LjA5NS0xMjkuNjMyIDEyOS4yNzJsLTcuNzE1LTU0LjU0OGMtLjYwOC0yNC4yNy0yMC40NDEtNDMuODQyLTQ0Ljk4NC00My44NDItMjQuNTcgMC00NC4zOTcgMTkuNjAyLTQ0Ljk4NiA0My44OTktLjAxMS40MTUtLjAwMy44MzEuMDIxIDEuMjQ1IDEuMjAxIDIwLjM5OCAxLjg1MiA0MC45MzEgMi4wMzEgNjQuMDU1LTEwLjEyMiA5LjQ4My0xNC43ODIgMjIuOTc4LTE0LjIxNyAzMi45ODV6bTM3My43NyAxMTYuNTI4LTE0OC40OTIgMTQ4LjQ5MmMtNDAuOTM4IDQwLjkzOS0xMDcuNTUzIDQwLjk0LTE0OC40OTMgMC00NS40ODktNDUuNDg5LTQ1LjI1Ny04NC40MzEtNDQuNzk2LTE2Mi4wMTQuMTc2LTI5LjY1Ni4zNzYtNjMuMjQzLTEuOTk4LTEwNC4wMzYuNzUxLTEyLjgzNyAxNi40NTUtMTguODQ3IDI1LjU4MS05LjcyMSA1LjA4OSA1LjA4OSAzLjE0IDcuMjc5IDQuNTQzIDEyLjcxOC4wMDMuMDI3LjAwNy4wNTQuMDEyLjA4bDEyLjA0IDg1LjE0MmMxLjczIDEyLjIyIDE2LjcyMiAxNy4yNDcgMjUuNDYgOC41MDUgMjUuODktMjUuODk0LTIuNzE0IDIuNjk0IDE0OS4yOTUtMTQ5LjI2MSA1Ljg3NS01LjQzOSAxNS4wNzEtNS4zMiAyMC43ODIuMzkgNS44NjMgNS44NjMgNS44NjMgMTUuMzUgMCAyMS4yMTMtLjAwMi4wMDItLjAwMy4wMDQtLjAwNS4wMDZsLTYzLjYzNSA2My42MzRjLTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxMyA1Ljg1NiA1Ljg1OCAxNS4zNTQgNS44NTggMjEuMjEzIDAgNC45OC00Ljk4IDc5Ljg5NC03OS44OTMgODQuODU0LTg0Ljg1MyA1Ljg1LTUuODQ4IDE1LjM2NS01Ljg0OCAyMS4yMTIuMDAxIDUuODYzIDUuODYzIDUuODYzIDE1LjM1IDAgMjEuMjEzIDAgMC03OS44ODMgNzkuODgzLTg0Ljg1MyA4NC44NTMtNS44NTggNS44NTgtNS44NTggMTUuMzU1IDAgMjEuMjEzIDUuODU3IDUuODU4IDE1LjM1NSA1Ljg1OCAyMS4yMTMgMGw2My42NC02My42NGM1Ljg1LTUuODQ5IDE1LjM2Ny01Ljg0OCAyMS4yMTMgMCA1Ljg0OSA1Ljg0OSA1Ljg1IDE1LjM2NS4wMDEgMjEuMjEzLTEwLjU5IDEwLjU5LTU5LjAyIDU5LjAyLTYzLjY0IDYzLjY0LTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxMyA1Ljg1NyA1Ljg1OCAxNS4zNTUgNS44NTggMjEuMjEzIDBsNDIuNTAyLTQyLjUwMmM1Ljg1Ni01Ljc3MyAxNS4zMTQtNS43NDcgMjEuMTM4LjA3NSA1Ljg2MyA1Ljg2MiA1Ljg2MyAxNS4zNSAwIDIxLjIxM3ptLTkuMDI3LTE4MS44OTJjNS44NjMgNS44NjMgNS44NjMgMTUuMzUgMCAyMS4yMTNsLTMuMzg1IDMuMzg1Yy0yLjE3Ny00LjU0Ny01LjEzMS04Ljc0Mi04LjgwMi0xMi40MTItMy42Ny0zLjY3LTcuODY0LTYuNjI0LTEyLjQxMi04LjgwMWwzLjM5My0zLjM5MmM1Ljg0OS01Ljg0MSAxNS4zNjEtNS44MzkgMjEuMjA2LjAwN3ptMjEuMjE0IDg0Ljg1My0zLjQwNSAzLjQwNWMtMi4xNDItNC40OTctNS4wNjMtOC43MTMtOC43ODItMTIuNDMyLTMuNzE4LTMuNzE4LTcuOTM0LTYuNjQtMTIuNDMxLTguNzgybDMuNDA0LTMuNDA0YzUuODUtNS44NDkgMTUuMzY3LTUuODQ4IDIxLjIxMy0uMDAxIDUuODQ4IDUuODQ5IDUuODQ5IDE1LjM2NS4wMDEgMjEuMjE0em0tNDAuNDI3LTE1MC4xMDhjNS44NDUgNS44NDUgNS44NjggMTUuMzA1LjAzNyAyMS4xNzYtMS45MTIgMS44OTcgMTEuMDUyLTEwLjk2NC00Ny44NDkgNDcuNDY1LTIuMTc3LTQuNTQ3LTUuMTMxLTguNzQyLTguODAyLTEyLjQxMy0zLjY4Ni0zLjY4Ni03Ljg2Mi02LjU4Ny0xMi4zMTUtOC43MjUgMi42NzMtMi42NjEgNDYuMDQ4LTQ1Ljg0NCA0Ny43MTQtNDcuNTA0IDUuODUzLTUuODQ5IDE1LjM2Ny01Ljg0NyAyMS4yMTUuMDAxem0tMjM1LjcxNyAxMjkuMjc0YzQ0LjgwMi00NC44MDkgMTQ5Ljc4OS0xNDkuNDE3IDE1MC44NjMtMTUwLjQ4NyA1Ljg1MS01Ljg0OSAxNS4zNjUtNS44NDggMjEuMjE0IDAgNS41OTYgNS41OTYgNS44MDMgMTQuMzkzLjg4MiAyMC4yNDEtMTQwLjI3NiAxMzkuOTk0IDY1Ljk2Ni02Ni4yNzktMTg1LjEwOSAxODQuODJsLTcuNTMtNTMuMjQzYzYuMDA4IDQuNTY3IDE0LjQwMiAzLjk0OSAxOS42OC0xLjMzMXptLTY3LjYzNi05Ni43MjVjLjc0OC0xMi44MzQgMTYuNDU2LTE4Ljg0NCAyNS41ODEtOS43MiA1LjA4OSA1LjA5IDMuMTM5IDcuMjc4IDQuNTQyIDEyLjcxNy4wMDQuMDI4IDkuODM2IDY5LjU1MiA5LjgzNiA2OS41NTItOC44MTktMTIuODYtMjMuMTYtMTkuODcxLTM4LjA1NS0xOS41ODEtLjI4Ni0xOC42NjQtLjkwOC0zNS44NTgtMS45MDQtNTIuOTY4eiIvPjxwYXRoIGQ9Im00OTcuMDIgOTIuMDQyaC0zMGMtOC4yODQgMC0xNSA2LjcxNi0xNSAxNXM2LjcxNiAxNSAxNSAxNWgzMGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1cy02LjcxNS0xNS0xNS0xNXoiLz48cGF0aCBkPSJtNDQ2LjYyNyA1NS42NDggMzAtMzBjNS44NTgtNS44NTggNS44NTgtMTUuMzU1IDAtMjEuMjEzLTUuODU3LTUuODU4LTE1LjM1NS01Ljg1OC0yMS4yMTMgMGwtMzAgMzBjLTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxMyA1Ljg1NyA1Ljg1OCAxNS4zNTUgNS44NTkgMjEuMjEzIDB6Ii8+PC9nPjwvc3ZnPg==") {
        clapBtn.src = "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTM3NC43MDYgMjc0Ljg4MS01OC42OSA1OC42OWMtNS42NjMgNS42NjMtMTQuODQ0IDUuNjYzLTIwLjUwNiAwbC0uNzA3LS43MDdjLTUuNjYzLTUuNjYzLTUuNjYzLTE0Ljg0NCAwLTIwLjUwNmw3OS45MDMtNzkuOTAzYzguNzg3LTguNzg3IDguNzg3LTIzLjAzMyAwLTMxLjgycy0yMy4wMzMtOC43ODctMzEuODIgMGwtNzkuOTAzIDc5LjkwM2MtNS42NjMgNS42NjMtMTQuODQ0IDUuNjYzLTIwLjUwNiAwbC0uNzA3LS43MDdjLTUuNjYzLTUuNjYzLTUuNjYzLTE0Ljg0MyAwLTIwLjUwNmwxMDEuMTE2LTEwMS4xMTZjOC43ODctOC43ODcgOC43ODctMjMuMDMzIDAtMzEuODJzLTIzLjAzMy04Ljc4Ny0zMS44MiAwbC0xMDEuMTE2IDEwMS4xMTZjLTUuNjYzIDUuNjYzLTE0Ljg0NCA1LjY2My0yMC41MDYgMHMtNS42NjMtMTQuODQ0IDAtMjAuNTA2bDc5LjkwMy03OS45MDNjOC43ODctOC43ODcgOC43ODctMjMuMDMzIDAtMzEuODJzLTIzLjAzMy04Ljc4Ny0zMS44MiAwYy0xNy43MzEgMTcuNzMyLTE2MS43NjkgMTYxLjc2OS0xNjcuNzYgMTY3Ljc2LTQuMzI4LTM1LjM1Ni05Ljc3My04OC44ODItOS43NzYtODguOTE3di4wMDFjMC04LjQzMi0zLjUzMi0xNi44NjUtMTAuNTk4LTIyLjg4Ny0xOC44MDktMTYuMDMtNDguNzcxLTMuMzU2LTQ5LjM5MyAyMi4xNDkgOC43NzggMTQ5LjIyOC0xNy4zOTYgMjI5LjEyIDUxLjIwNCAyOTcuNzIxIDQ2Ljg2MyA0Ni44NjMgMTMzLjQ0OSA1Ny40NyAxODAuMzEyIDEwLjYwN2wxNzUuMDA5LTE3NS4wMDljOC43ODctOC43ODcgOC43ODctMjMuMDMzIDAtMzEuODJzLTIzLjAzMy04Ljc4Ny0zMS44MTkgMHoiLz48cGF0aCBkPSJtMjkuOTggMTE0LjE0YzEyLjUgMCAyNC42NCAzLjg5IDM0LjcxIDExLjAyLTIuMzctMjEuODktNC4xOS0zOS43My00LjE5LTM5LjczIDAtLjAxIDAtLjAxIDAtLjAyLS4wMS04LjQyLTMuNTQtMTYuODQtMTAuNi0yMi44Ni0xOC44MTMtMTYuMDQyLTQ4Ljc3NC0zLjM1Mi00OS4zOSAyMi4xNS43NCAxMi41OSAxLjIzIDI0LjY4IDEuNTUgMzYuMzEgOC41NC00LjQ4IDE4LjEzLTYuODcgMjcuOTItNi44N3oiLz48cGF0aCBkPSJtOTIuNjIgMTk3Ljc2IDEyMy42OS0xMjMuN2M4Ljk3LTguOTYgMjAuNi0xNC4yOCAzMy4xMi0xNS4yMmwyMC40My0yMC40M2M4Ljc4LTguNzkgOC43OC0yMy4wMyAwLTMxLjgyLTguODItOC44LTIzLjA0OC04Ljc3Mi0zMS44MiAwLTE0LjI5IDE0LjI4LTExMC40NyAxMTAuNDctMTUwLjUxIDE1MC41MSAxLjQ1IDQuOTEgMi4yOCAxMC4wMiAyLjQzIDE1LjI0LjM1IDMuMzQgMS4zNCAxMyAyLjY2IDI1LjQyeiIvPjxwYXRoIGQ9Im0zMDMuNSA5NS4zMWM2LjAzLTMuMDIgMTIuNjEtNC44NSAxOS40Ni01LjM1bDIwLjQ0LTIwLjQ0YzguNzgtOC43OCA4Ljc4LTIzLjAzIDAtMzEuODItOC43OC04Ljc2LTIzLjAzNC04Ljc4Ni0zMS44MiAwbC0yOS40OCAyOS40OGM5Ljc1NCA2LjM2MiAxNy42NCAxNi4yMDMgMjEuNCAyOC4xM3oiLz48cGF0aCBkPSJtNDk3IDkyaC0zMGMtOC4yODQgMC0xNSA2LjcxNi0xNSAxNXM2LjcxNiAxNSAxNSAxNWgzMGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1cy02LjcxNi0xNS0xNS0xNXoiLz48cGF0aCBkPSJtNDc2LjYwNiA0LjM5M2MtNS44NTctNS44NTgtMTUuMzU1LTUuODU4LTIxLjIxMyAwbC0zMCAzMGMtNS44NTggNS44NTgtNS44NTggMTUuMzU1IDAgMjEuMjEzczE1LjM1NiA1Ljg1OCAyMS4yMTMgMGwzMC0zMGM1Ljg1OS01Ljg1NyA1Ljg1OS0xNS4zNTUgMC0yMS4yMTN6Ii8+PC9nPjwvc3ZnPg=="
    } else {
        clapBtn.src = "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIuMDIgNTEyLjAyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMi4wMiA1MTIuMDIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibS4wNDYgMTg2LjI2OGMyLjM2MiA0MC4xNTMgMi4xNjQgNzMuNDUgMS45ODkgMTAyLjgyOC0uNDYzIDc3Ljg4OC0xLjE4OCAxMjguNjM0IDUzLjU4MyAxODMuNDA1IDUyLjYzNSA1Mi42MzQgMTM4LjI4MSA1Mi42MzggMTkwLjkxOSAwIC4wMDEtLjAwMS4wMDEtLjAwMi4wMDItLjAwM2wxNDguNDktMTQ4LjQ5YzE3LjU4Ni0xNy41ODUgMTcuNTg5LTQ2LjA1MiAwLTYzLjY0LTMuNzE3LTMuNzE3LTcuOTI5LTYuNjQ3LTEyLjQyNC04Ljc4OWwyNC42MS0yNC42MWMxNy41NDUtMTcuNTQ1IDE3LjU0NS00Ni4wOTMgMC02My42NC00LjEzOC00LjEzOC04Ljg5Mi03LjI4Ny0xMy45NjYtOS40NzQgOS43ODItMTcuMDM4IDcuNTYtMzkuMzU5LTcuMjQ4LTU0LjE2Ni0zLjkxOS0zLjkxOS04LjM4OS02Ljk1Ni0xMy4xNjEtOS4xMjQgMTEuMTEzLTE3LjIzNSA5LjM1Mi00MC43MjgtNi4wNTItNTYuMTMxLTE0LjY1Mi0xNC42NTItMzYuOTcyLTE3LjA1Ny01NC4xNDEtNy4yNTMtMi4yMjUtNS4xNDQtNS40MTYtOS44NzgtOS40OTktMTMuOTYtMTcuNTQ0LTE3LjU0NS00Ni4wOTQtMTcuNTQ2LTYzLjYyLS4wMTktLjkxMi45MDgtNzkuMzgzIDc5LjA5NS0xMjkuNjMyIDEyOS4yNzJsLTcuNzE1LTU0LjU0OGMtLjYwOC0yNC4yNy0yMC40NDEtNDMuODQyLTQ0Ljk4NC00My44NDItMjQuNTcgMC00NC4zOTcgMTkuNjAyLTQ0Ljk4NiA0My44OTktLjAxMS40MTUtLjAwMy44MzEuMDIxIDEuMjQ1IDEuMjAxIDIwLjM5OCAxLjg1MiA0MC45MzEgMi4wMzEgNjQuMDU1LTEwLjEyMiA5LjQ4My0xNC43ODIgMjIuOTc4LTE0LjIxNyAzMi45ODV6bTM3My43NyAxMTYuNTI4LTE0OC40OTIgMTQ4LjQ5MmMtNDAuOTM4IDQwLjkzOS0xMDcuNTUzIDQwLjk0LTE0OC40OTMgMC00NS40ODktNDUuNDg5LTQ1LjI1Ny04NC40MzEtNDQuNzk2LTE2Mi4wMTQuMTc2LTI5LjY1Ni4zNzYtNjMuMjQzLTEuOTk4LTEwNC4wMzYuNzUxLTEyLjgzNyAxNi40NTUtMTguODQ3IDI1LjU4MS05LjcyMSA1LjA4OSA1LjA4OSAzLjE0IDcuMjc5IDQuNTQzIDEyLjcxOC4wMDMuMDI3LjAwNy4wNTQuMDEyLjA4bDEyLjA0IDg1LjE0MmMxLjczIDEyLjIyIDE2LjcyMiAxNy4yNDcgMjUuNDYgOC41MDUgMjUuODktMjUuODk0LTIuNzE0IDIuNjk0IDE0OS4yOTUtMTQ5LjI2MSA1Ljg3NS01LjQzOSAxNS4wNzEtNS4zMiAyMC43ODIuMzkgNS44NjMgNS44NjMgNS44NjMgMTUuMzUgMCAyMS4yMTMtLjAwMi4wMDItLjAwMy4wMDQtLjAwNS4wMDZsLTYzLjYzNSA2My42MzRjLTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxMyA1Ljg1NiA1Ljg1OCAxNS4zNTQgNS44NTggMjEuMjEzIDAgNC45OC00Ljk4IDc5Ljg5NC03OS44OTMgODQuODU0LTg0Ljg1MyA1Ljg1LTUuODQ4IDE1LjM2NS01Ljg0OCAyMS4yMTIuMDAxIDUuODYzIDUuODYzIDUuODYzIDE1LjM1IDAgMjEuMjEzIDAgMC03OS44ODMgNzkuODgzLTg0Ljg1MyA4NC44NTMtNS44NTggNS44NTgtNS44NTggMTUuMzU1IDAgMjEuMjEzIDUuODU3IDUuODU4IDE1LjM1NSA1Ljg1OCAyMS4yMTMgMGw2My42NC02My42NGM1Ljg1LTUuODQ5IDE1LjM2Ny01Ljg0OCAyMS4yMTMgMCA1Ljg0OSA1Ljg0OSA1Ljg1IDE1LjM2NS4wMDEgMjEuMjEzLTEwLjU5IDEwLjU5LTU5LjAyIDU5LjAyLTYzLjY0IDYzLjY0LTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxMyA1Ljg1NyA1Ljg1OCAxNS4zNTUgNS44NTggMjEuMjEzIDBsNDIuNTAyLTQyLjUwMmM1Ljg1Ni01Ljc3MyAxNS4zMTQtNS43NDcgMjEuMTM4LjA3NSA1Ljg2MyA1Ljg2MiA1Ljg2MyAxNS4zNSAwIDIxLjIxM3ptLTkuMDI3LTE4MS44OTJjNS44NjMgNS44NjMgNS44NjMgMTUuMzUgMCAyMS4yMTNsLTMuMzg1IDMuMzg1Yy0yLjE3Ny00LjU0Ny01LjEzMS04Ljc0Mi04LjgwMi0xMi40MTItMy42Ny0zLjY3LTcuODY0LTYuNjI0LTEyLjQxMi04LjgwMWwzLjM5My0zLjM5MmM1Ljg0OS01Ljg0MSAxNS4zNjEtNS44MzkgMjEuMjA2LjAwN3ptMjEuMjE0IDg0Ljg1My0zLjQwNSAzLjQwNWMtMi4xNDItNC40OTctNS4wNjMtOC43MTMtOC43ODItMTIuNDMyLTMuNzE4LTMuNzE4LTcuOTM0LTYuNjQtMTIuNDMxLTguNzgybDMuNDA0LTMuNDA0YzUuODUtNS44NDkgMTUuMzY3LTUuODQ4IDIxLjIxMy0uMDAxIDUuODQ4IDUuODQ5IDUuODQ5IDE1LjM2NS4wMDEgMjEuMjE0em0tNDAuNDI3LTE1MC4xMDhjNS44NDUgNS44NDUgNS44NjggMTUuMzA1LjAzNyAyMS4xNzYtMS45MTIgMS44OTcgMTEuMDUyLTEwLjk2NC00Ny44NDkgNDcuNDY1LTIuMTc3LTQuNTQ3LTUuMTMxLTguNzQyLTguODAyLTEyLjQxMy0zLjY4Ni0zLjY4Ni03Ljg2Mi02LjU4Ny0xMi4zMTUtOC43MjUgMi42NzMtMi42NjEgNDYuMDQ4LTQ1Ljg0NCA0Ny43MTQtNDcuNTA0IDUuODUzLTUuODQ5IDE1LjM2Ny01Ljg0NyAyMS4yMTUuMDAxem0tMjM1LjcxNyAxMjkuMjc0YzQ0LjgwMi00NC44MDkgMTQ5Ljc4OS0xNDkuNDE3IDE1MC44NjMtMTUwLjQ4NyA1Ljg1MS01Ljg0OSAxNS4zNjUtNS44NDggMjEuMjE0IDAgNS41OTYgNS41OTYgNS44MDMgMTQuMzkzLjg4MiAyMC4yNDEtMTQwLjI3NiAxMzkuOTk0IDY1Ljk2Ni02Ni4yNzktMTg1LjEwOSAxODQuODJsLTcuNTMtNTMuMjQzYzYuMDA4IDQuNTY3IDE0LjQwMiAzLjk0OSAxOS42OC0xLjMzMXptLTY3LjYzNi05Ni43MjVjLjc0OC0xMi44MzQgMTYuNDU2LTE4Ljg0NCAyNS41ODEtOS43MiA1LjA4OSA1LjA5IDMuMTM5IDcuMjc4IDQuNTQyIDEyLjcxNy4wMDQuMDI4IDkuODM2IDY5LjU1MiA5LjgzNiA2OS41NTItOC44MTktMTIuODYtMjMuMTYtMTkuODcxLTM4LjA1NS0xOS41ODEtLjI4Ni0xOC42NjQtLjkwOC0zNS44NTgtMS45MDQtNTIuOTY4eiIvPjxwYXRoIGQ9Im00OTcuMDIgOTIuMDQyaC0zMGMtOC4yODQgMC0xNSA2LjcxNi0xNSAxNXM2LjcxNiAxNSAxNSAxNWgzMGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1cy02LjcxNS0xNS0xNS0xNXoiLz48cGF0aCBkPSJtNDQ2LjYyNyA1NS42NDggMzAtMzBjNS44NTgtNS44NTggNS44NTgtMTUuMzU1IDAtMjEuMjEzLTUuODU3LTUuODU4LTE1LjM1NS01Ljg1OC0yMS4yMTMgMGwtMzAgMzBjLTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxMyA1Ljg1NyA1Ljg1OCAxNS4zNTUgNS44NTkgMjEuMjEzIDB6Ii8+PC9nPjwvc3ZnPg=="
    }
}
