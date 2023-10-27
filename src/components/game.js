export function logF(info) 
{
    console.log(info)
};
// variables 
var scr = 20;

var x = 10;
var y = 15;
var vx = 0;
var vy = 0;
var quan = 20;
var app = 15;

var tail = 5;
var trail = [];

const vel = 1;
export function game(ctx) 
{
    x += vx;
    y += vy;
    if(x < 0)
        x = quan-1
    if(x > quan-1)
        x = 0
    if(y < 0)
        y = quan-1
    if(y > quan-1)
        y = 0

    ctx.fillStyle = '#8DB38B';
    ctx.fillRect(0, 0 , ctx.canvas.width, ctx.canvas.height);

    snake(ctx);
    food(ctx);
    score(ctx); 
}

function score(ctx) 
{
    ctx.font = '20px verdana';
    ctx.fillStyle = 'black';
    ctx.fillText('score: ' + (tail - 5), scr - 5, scr)
}

function snake(ctx) {
    ctx.fillStyle = 'green';
    for(let i = 0; i < trail.length; i++) 
    {
        ctx.fillRect(trail[i].x*quan, trail[i].y*quan, quan-1, quan-1)

        if(trail[i].x == x && trail[i].y == y) 
        {
            vx = 0;
            vy = 0;
            tail = 5;
        }
    }

    trail.push({x: x,y: y});

    while(trail.length > tail) 
    {
        trail.shift();
    }
};
function food(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(app*quan,app*quan, quan,quan);

    if(app == x && app == y) 
    {
        tail++;
        app = Math.floor(Math.random()*quan)
    }
};
export function inputControl(event) {
    switch (event.keyCode) 
    {
        case 37: 
            vx = -vel;
            vy = 0;
            break;
        case 38:
            vx = 0;
            vy = -vel;
            break;
        case 39:
            vx = vel;
            vy = 0;
            break;
        case 40:
            vx = 0;
            vy = vel;
            break;
            
        default:
            break;
    }
}
