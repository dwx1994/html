module.exports =
`
#ifdef GL_ES
precision mediump float;
#endif

uniform float sprWidth;
uniform float sprHight;
uniform vec3 xlist;
uniform vec3 ylist;
uniform vec2 disX;
uniform vec2 disY;
varying vec4 v_fragmentColor;
varying vec2 v_texCoord;


bool isHide(float px , float py)
{   
    bool b = false;
    float dx = px*sprWidth;
    float dy = py*sprHight;
    if (disX[0] != 0.0 || disX[1] != 0.0)
    {
        if (dx >= disX[0] && dx <= disX[1]){
            return true;
        }
    }
    else if (disY[0] != 0.0 || disY[1] != 0.0)
    {
        if (dy >= disY[0] && dy <= disY[1]){
            return true;
        }
    }
    
    if ( ((ylist[0]>=dy) != (ylist[2]>=dy)) && (dx < (xlist[2]-xlist[0]) * (dy-ylist[0]) / (ylist[2]-ylist[0]) + xlist[0]) )
    {
       b = !b;
    }
    if ( ((ylist[1]>=dy) != (ylist[0]>=dy)) && (dx < (xlist[0]-xlist[1]) * (dy-ylist[1]) / (ylist[0]-ylist[1]) + xlist[1]) )
    {
       b = !b;
    }
    if ( ((ylist[2]>=dy) != (ylist[1]>=dy)) && (dx < (xlist[1]-xlist[2]) * (dy-ylist[2]) / (ylist[1]-ylist[2]) + xlist[2]) )
    {
       b = !b;
    }

    return b;
}

void main()
{
    bool hide = isHide(v_texCoord.x,v_texCoord.y);
    vec4 iv = texture2D(CC_Texture0,v_texCoord);
    if (hide)
    {
        iv.a = 0.0;
    }
    gl_FragColor = v_fragmentColor*iv;
}


`
