export const BaseURL = "http://project.wangxuefeng.com.cn";
export const Data = {
  title: '靠谱的前端进阶之路',
  ui: {
    menu: false
  },
  project_list: [{
      order: 1,
      title: '基础篇',
      subTitle: '假设你已掌握以下内容',
      list: [{
          list: `HTML + CSS3 + Javascript 项目开发`
        },
        {
          list: `基于 JQuery 的项目开发`
        }
      ],
      content: ``
    },
    {
      order: 2,
      title: '进阶篇',
      subTitle: '框架模式 从MVC到MVVM',
      list: [{
          list: `MVC`,
          content: `MVC 是一种使用 MVC（Model View Controller 模型-视图-控制器）设计创建 Web 应用程序的模式

Model（模型）是应用程序中用于处理应用程序数据逻辑的部分。通常模型对象负责在数据库中存取数据
View（视图）是应用程序中处理数据显示的部分。通常视图是依据模型数据创建的
Controller（控制器）是应用程序中处理用户交互的部分。通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据

MVC 分层有助于管理复杂的应用程序，因为您可以在一个时间内专门关注一个方面。
例如，您可以在不依赖业务逻辑的情况下专注于视图设计。同时也让应用程序的测试更加容易

MVC 分层同时也简化了分组开发。不同的开发人员可同时开发视图、控制器逻辑和业务逻辑`
        },
        {
          list: 'MVC 示意图',
          imgContent: `<img src="${BaseURL}/assets/kp/imgs/mvc.jpg" style="margin: 0 auto;">`
        },
        {
          list: 'MVVM',
          content: `MVVM是Model-View-ViewModel的简写。
它本质上就是MVC 的改进版。
MVVM 就是将其中的View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开。

模型 是指代表真实状态内容的领域模型（面向对象），或指代表内容的数据访问层（以数据为中心）。

视图 就像在MVC和MVP模式中一样，视图是用户在屏幕上看到的结构、布局和外观（UI）。

视图模型 是暴露公共属性和命令的视图的抽象。
MVVM没有MVC模式的控制器，也没有MVP模式的presenter，有的是一个绑定器。在视图模型中，绑定器在视图和数据绑定器之间进行通信。

绑定器 声明性数据和命令绑定隐含在MVVM模式中。绑定器使开发人员免于被迫编写样板式逻辑来同步视图模型和视图。

MVVM模式和MVC模式一样，主要目的是分离视图（View）和模型（Model），有几大优点
1. 低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，
当View变化的时候Model可以不变，当Model变化的时候View也可以不变。

2. 可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。

3. 独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。

4. 可测试。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。`,
          imgContent: `<img src="${BaseURL}/assets/kp/imgs/MVVMT.jpg" width="50%" style="margin: 0 auto;">`
        },
        {
          list: 'MVVM 原理图',
          imgContent: `<img src="${BaseURL}/assets/kp/imgs/MVVM.jpg" style="margin: 0 auto;">`
        },
        {
          list: '未完待续。。。',
          imgContent: ``
        }
      ],
      content: ``
    }
  ]
};