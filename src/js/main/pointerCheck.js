function checkOrganelaOverlap() {
    var pointer = game.input.mousePointer;
    var overlapControl;
    if (organelas.last) {
        if (!(Math.abs((pointer.x + game.camera.x) - organelas.last.x) < 60 && Math.abs((pointer.y + game.camera.y) - organelas.last.y) < 20)) {
            overlapControl = true;
        } else {
            overlapControl = false;
        }
    } else {
        overlapControl = true;
    }

    if (overlapControl) {
        return true;
    } else {
        return false;
    }

}

function checkEnergiaOverlap() {
    var pointer = game.input.mousePointer;
    var overlapControl;
    if (energia.body) {
        if (!(Math.abs((pointer.x + game.camera.x) - energia.body.x) < 30 && Math.abs((pointer.y + game.camera.y) - energia.body.y) < 30)) {
            overlapControl = true;
        } else {
            overlapControl = false;
        }
    } else {
        overlapControl = true;
    }
    if (overlapControl) {
        return true;
    } else {
        return false;
    }

}

function checkGerarBtnOverlap() {
    var pointer = game.input.mousePointer;
    var overlapControl;
    if (gerador.gerarBtn) {
        if (!(Math.abs((pointer.x + game.camera.x) - gerador.gerarBtn.x - 40) < 100 && Math.abs((pointer.y + game.camera.y) - gerador.gerarBtn.y) < 80)) {
            overlapControl = true;
        } else {
            overlapControl = false;
        }
    } else {
        overlapControl = true;
    }
    if (overlapControl) {
        return true;
    } else {
        return false;
    }
}

function checkReatorBtnOverlap() {
    var pointer = game.input.mousePointer;
    var overlapControl;
    if (reator.gerarBtn) {
        if (!(Math.abs((pointer.x + game.camera.x) - reator.gerarBtn.x - 30) < 50 && Math.abs((pointer.y + game.camera.y) - reator.gerarBtn.y) < 20)) {
            overlapControl = true;
        } else {
            overlapControl = false;
        }
    } else {
        overlapControl = true;
    }
    if (overlapControl) {
        return true;
    } else {
        return false;
    }
}

function checkNaveEspacialOverlap() {
    var pointer = game.input.mousePointer;
    var overlapControl;
    if (naveEspacial.body) {
        if (!(Math.abs((pointer.x + game.camera.x) - naveEspacial.body.x - 90) < 90 && Math.abs((pointer.y + game.camera.y) - naveEspacial.body.y - 90) < 120)) {
            overlapControl = true;
        } else {
            overlapControl = false;
        }
    } else {
        overlapControl = true;
    }
    if (overlapControl) {
        return true;
    } else {
        return false;
    }
}

function checkPortalOverlap() {
    var pointer = game.input.mousePointer;
    var overlapControl;
    if (portal.station) {
        if (!(Math.abs((pointer.x + game.camera.x) - portal.station.x - 90) < 90 && Math.abs((pointer.y + game.camera.y) - portal.station.y - 90) < 120)) {
            overlapControl = true;
        } else {
            overlapControl = false;
        }
    } else {
        overlapControl = true;
    }
    if (overlapControl) {
        return true;
    } else {
        return false;
    }
}