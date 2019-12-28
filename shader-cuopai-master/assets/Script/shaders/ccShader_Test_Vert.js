module.exports =
`
attribute vec4 a_position;
attribute vec2 a_texCoord;
attribute vec4 a_color;
varying vec2 v_texCoord;
varying vec4 v_fragmentColor;

uniform float sprWidth;
uniform float sprHight;
uniform vec3 xlist;
uniform vec3 ylist;
uniform vec2 disX;
uniform vec2 disY;

uniform vec2 worldPos;

varying float v_sprWidth;
varying float v_sprHight;
varying vec3 v_xlist;
varying vec3 v_ylist;
varying vec2 v_disX;
varying vec2 v_disY;

vec2 getSymmetricPos(vec2 sp,vec2 pos1, vec2 pos2)
{
    float disX = pos2.x - pos1.x;
    float disY = pos2.y - pos1.y;
    if (disX == 0.0)
    {
        float x = pos1.x - sp.x;
        return vec2(pos1.x + x,sp.y);
    }
    //获取截线斜率
    float k1 = disY/disX;

    //设对称点坐标
    // var x = 0;
    // var y = 0;
    //直线方程式
    //y = k(x-x1) + y1
    //方程式
    //(y - sp.y)/(x - sp.x) = -1/k1; 方程式(1)
    //(y+sp.y)/2 = k1*((x + sp.x)/2 - pos1.x) + pos1.y;方程式(2)

    //由方程式(1)得
    //x = (y - sp.y)/(-1/k1)+sp.x
    //x = sp.y*k1 - y*k1 + sp.x
    //由方程式(2)得
    //y = k1*x + k1*sp.x - k1*pos1.x*2 + pos1.y*2 - sp.y;
    //方程式(1)带入(2)得
    //y = k1*( sp.y*k1 - y*k1 + sp.x ) + k1*sp.x - k1*pos1.x*2 + pos1.y*2 - sp.y;
    //y = sp.y*k1*k1 - y*k1*k1 + sp.x*k1 + k1*sp.x - k1*pos1.x*2 + pos1.y*2 - sp.y;

    float y = (sp.y*k1*k1  + sp.x*k1 + k1*sp.x - k1*pos1.x*2.0 + pos1.y*2.0 - sp.y)/(1.0+k1*k1);
    float x = (y - sp.y)/(-1.0/k1)+sp.x;

    return vec2(x,y);
}


void main()
{   
    v_sprWidth = sprWidth;
    v_sprHight = sprHight;
    v_xlist = xlist;
    v_ylist = ylist;
    v_disX = disX;
    v_disY = disY;

    vec2 pos1 = vec2(0.0,0.0);
    vec2 pos2 = vec2(0.0,0.0);

    if (v_disX[0] != 0.0 || v_disX[1] != 0.0)
    {
        if (v_disX[0] == 0.0)
        {
            pos1 = vec2(v_disX[1] + worldPos.x,worldPos.y);
            pos2 = vec2(v_disX[1] + worldPos.x,worldPos.y+sprHight);
        }
        else
        {
            pos1 = vec2(v_disX[0] + worldPos.x,worldPos.y);
            pos2 = vec2(v_disX[0] + worldPos.x,worldPos.y+sprHight);
        }
    }
    else if (v_disY[0] != 0.0 || v_disY[1] != 0.0)
    {
        if (v_disY[0] == 0.0)
        {
            pos1 = vec2(worldPos.x,(sprHight - v_disY[1]) + worldPos.y);
            pos2 = vec2(worldPos.x + sprWidth, (sprHight - v_disY[1]) + worldPos.y);
        }
        else
        {
            pos1 = vec2(worldPos.x, (sprHight - v_disY[0]) + worldPos.y);
            pos2 = vec2(worldPos.x + sprWidth, (sprHight - v_disY[0]) + worldPos.y);
        }
    }
    else if(v_xlist.x != 0.0 || v_xlist.y != 0.0 || v_xlist.z != 0.0){
        pos1 = vec2(v_xlist.y+worldPos.x,sprHight - v_ylist.y + worldPos.y);
        pos2 = vec2(v_xlist.z+worldPos.x,sprHight - v_ylist.z + worldPos.y);
    }

    vec2 sp = vec2(a_position.x, a_position.y);
    vec2 symmetricPos = getSymmetricPos(sp,pos1,pos2);
    vec4 tmp_pos = vec4(a_position.x, a_position.y,a_position.z, a_position.w);
    tmp_pos.x = symmetricPos.x ;
    tmp_pos.y = symmetricPos.y ;
    

    gl_Position = CC_PMatrix * tmp_pos;
    v_fragmentColor = a_color;
    v_texCoord = a_texCoord;

}
` 

