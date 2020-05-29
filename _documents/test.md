Grid 布局的属性分成两类。一类定义在容器上面，称为容器属性；另一类定义在项目上面，称为项目属性。
# 容器属性
### 1. display属性
指定一个容器采用网格布局
``` css
div {
  display: grid;
}
div {
  display: inline-grid; //设置为行内元素
}
```
注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。
### 2. grid-template-columns 属性，grid-template-rows 属性
grid-template-columns属性定义每一列的列宽，grid-template-rows属性定义每一行的行高。
``` css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
.container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
}
//grid-template-columns: repeat(2, 100px 20px 80px);
```
repeat()接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。
repeat()重复某种模式也是可以的。
![](https://upload-images.jianshu.io/upload_images/19506343-3ba10e1bc1cb6340.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### auto-fill auto-fit关键字
``` css
.container {
  display: grid;
  grid-template-columns(auto-fill,100px);
  grid-template-columns(auto-fit,100px);
}
```
有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充。
假设容器可以容纳n个单元格，但是只有m个项目时(n>m)，atuo-fill会生成n个单元格，auto-fit只会生成m个单元格。项目数多于容器单行可容纳单元格的情况下两个属性作用相同。
![](https://upload-images.jianshu.io/upload_images/19506343-0fef913fcf98f1b0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### fr关键字
为了方便表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。fr可以与绝对长度单位一起使用。
``` css
  grid-template-columns: 1fr 2fr 3fr;
  grid-template-columns: 150px 1fr 2fr; //第一列的宽度为150像素，第二列的宽度是第三列的一半。
  grid-template-columns: 1fr 1fr minmax(100px, 1fr); //表示列宽不小于100px，不大于1fr
```
![](https://upload-images.jianshu.io/upload_images/19506343-5733797b9448a95f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### 网格线的名称
grid-template-columns属性和grid-template-rows属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。
上面代码指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。
网格布局允许同一根线有多个名字，比如[fifth-line row-5]。
``` css
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```
### 3.row-gap 属性，column-gap 属性，gap 属性
row-gap属性设置行与行的间隔（行间距），column-gap属性设置列与列的间隔（列间距）。
gap属性是column-gap和row-gap的合并简写形式。
``` css
grid-gap: <grid-row-gap> <grid-column-gap>;
```
``` css
grid-gap：20px 20px;
```
![](https://upload-images.jianshu.io/upload_images/19506343-8312d44c4be2faae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 4.grid-template-areas 属性
网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。grid-template-areas属性用于定义区域。
``` css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
//上面代码将9个单元格分成a、b、c三个区域。
grid-template-areas: 'a a a'
                     'b b b'
                     'c c c';
//如果某些区域不需要利用，则使用"点"（.）表示。
grid-template-areas: 'a . c'
                     'd . f'
                     'g . i';
```
注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为区域名-start，终止网格线自动命名为区域名-end。
比如，区域名为header，则起始位置的水平网格线和垂直网格线叫做header-start，终止位置的水平网格线和垂直网格线叫做header-end。
### 5.grid-auto-flow
默认值是row，即"先行后列"。也可以将它设成column，变成"先列后行"。
``` css
grid-auto-flow: column;
```
![](https://upload-images.jianshu.io/upload_images/19506343-880f18b5e369d2a7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
grid-auto-flow属性除了设置成row和column，还可以设成row dense和column dense。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。
``` css
grid-auto-flow: row;
```
![](https://upload-images.jianshu.io/upload_images/19506343-aea75cea2edb488b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
``` css
grid-auto-flow: row dense;
```
![](https://upload-images.jianshu.io/upload_images/19506343-cbf29ca9fa83f18d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 6.justify-items 属性，align-items 属性，place-items 属性
justify-items属性设置单元格内容的水平位置（左中右），align-items属性设置单元格内容的垂直位置（上中下）。
```
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```
- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）。

place-items属性是align-items属性和justify-items属性的合并简写形式。如果省略第二个值，则浏览器认为与第一个值相等。
``` css
place-items: <align-items> <justify-items>;
```
### 7.justify-content 属性，align-content 属性，place-content 属性
justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）。
``` css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}
```
place-content属性是align-content属性和justify-content属性的合并简写形式。
``` css
place-content: <align-content> <justify-content>
```
### 8.grid-auto-columns 属性，grid-auto-rows 属性
有时候，一些项目的指定位置，在现有网格的外部。比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。

grid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与grid-template-columns和grid-template-rows完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。
``` css
grid-auto-rows: 200px;
```
![](https://upload-images.jianshu.io/upload_images/19506343-e651686083414fc5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 9. grid-template和grid
grid-template属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式。

grid属性是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式。
# 容器属性
### 1.grid-column-start 属性，grid-column-end 属性，grid-row-start 属性，grid-row-end 属性
用于指定项目位置
- grid-column-start属性：左边框所在的垂直网格线
- grid-column-end属性：右边框所在的垂直网格线
- grid-row-start属性：上边框所在的水平网格线
- grid-row-end属性：下边框所在的水平网格线

``` css
.item-1 {
  grid-column-start: 2;
  grid-column-end: 4;
}
```
![](https://upload-images.jianshu.io/upload_images/19506343-6552ddec887e9ea2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
``` css
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```
![](https://upload-images.jianshu.io/upload_images/19506343-3422958a09f46a39.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这四个属性的值，除了指定为第几个网格线，还可以指定为网格线的名字。
``` css
.item-1 {
  grid-column-start: header-start;
  grid-column-end: header-end;
}
```
这四个属性的值还可以使用span关键字，表示"跨越"，即左右边框（上下边框）之间跨越多少个网格。
``` css
.item-1 {
  grid-column-start: span 2;
  // 效果等同于上面（start、end同时存在时优先使用start）
  // grid-column-end: span 2; 
}
```
![](https://upload-images.jianshu.io/upload_images/19506343-ef2584653addacc2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
使用这四个属性，如果产生了项目的重叠，则使用z-index属性指定项目的重叠顺序。
### 2. grid-column 属性，grid-row 属性
grid-column属性是grid-column-start和grid-column-end的合并简写形式，grid-row属性是grid-row-start属性和grid-row-end的合并简写形式。
``` css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
/* 等同于 */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
```
### 3. grid-area 属性
grid-area属性指定项目放在哪一个区域。
``` css
.container{
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
.item-1{
  grid-area: e;
}
```
![](https://upload-images.jianshu.io/upload_images/19506343-6d5a97b891c45632.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
grid-area与grid-column、grid-row同时存在时后指定的生效。
``` css
.container{
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
.item-1{
  grid-column: 1/2;
  grid-area: e;
  grid-row: 1/2;
}
```
![](https://upload-images.jianshu.io/upload_images/19506343-dfaf837d879ff67f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
grid-area属性还可用作grid-row-start、grid-column-start、grid-row-end、grid-column-end的合并简写形式，直接指定项目的位置。
``` css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```
### 4. justify-self 属性，align-self 属性，place-self 属性
参考 justify-items 属性，align-items 属性，place-items 属性，针对当前项目使用。