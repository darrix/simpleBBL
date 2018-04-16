/// <reference path="../node_modules/babylonjs/babylon.d.ts" />

var canvas =  document.getElementById("renderCanvas") as HTMLCanvasElement;

var engine = new BABYLON.Engine(canvas, true);

var createScene = function () : BABYLON.Scene 
{
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0,1,-1), scene);
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter:2}, scene);
    return scene;

}

var scene = createScene();

engine.runRenderLoop( () => scene.render() );

window.addEventListener("resize", () => scene.render()); //function () { scene.render(); });







