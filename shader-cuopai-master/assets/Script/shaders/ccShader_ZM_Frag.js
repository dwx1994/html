module.exports =
`
#ifdef GL_ES
precision mediump float;
#endif

varying float v_sprWidth;
varying float v_sprHight;
varying vec3 v_xlist;
varying vec3 v_ylist;
varying vec2 v_disX;
varying vec2 v_disY;
varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

//判断是否在消失部分的里面
bool inside(float px , float py)
{   
    bool b = false;
    float dx = px*v_sprWidth;
    float dy = py*v_sprHight;
    if (v_disX[0] != 0.0 || v_disX[1] != 0.0)
    {
        if (dx >= v_disX[0] && dx <= v_disX[1]){
            return true;
        }
    }
    else if (v_disY[0] != 0.0 || v_disY[1] != 0.0)
    {
        if (dy >= v_disY[0] && dy <= v_disY[1]){
            return true;
        }
    }
    
    if ( ((v_ylist[0]>dy) != (v_ylist[2]>dy)) && (dx < (v_xlist[2]-v_xlist[0]) * (dy-v_ylist[0]) / (v_ylist[2]-v_ylist[0]) + v_xlist[0]) )
    {
       b = !b;
    }
    if ( ((v_ylist[1]>dy) != (v_ylist[0]>dy)) && (dx < (v_xlist[0]-v_xlist[1]) * (dy-v_ylist[1]) / (v_ylist[0]-v_ylist[1]) + v_xlist[1]) )
    {
       b = !b;
    }
    if ( ((v_ylist[2]>dy) != (v_ylist[1]>dy)) && (dx < (v_xlist[1]-v_xlist[2]) * (dy-v_ylist[2]) / (v_ylist[1]-v_ylist[2]) + v_xlist[2]) )
    {
       b = !b;
    }

    return b;
}

void main()
{
    bool onIn = inside(v_texCoord.x,v_texCoord.y);
    vec4 iv = texture2D(CC_Texture0,vec2(v_texCoord.x,1.0 - v_texCoord.y));
    if (!onIn)
    {
        iv.a = 0.0;
    }
    gl_FragColor = v_fragmentColor*iv;
}


`
