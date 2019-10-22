Page({
  data: {
    background: ['../../images/1.jpeg', '../../images/2.jpeg', '../../images/3.jpeg'],
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 8000,
    circular: true,
    height:"750px"
  },
  onLoad() {
      var background=[
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571468696208&di=8632298075237505c9e6a5cd3aff21d1&imgtype=0&src=http%3A%2F%2Fimga.mumayi.com%2Fandroid%2Fwallpaper%2F2011%2F11%2F21%2Fsl_600_2011112108123046165679.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571468002670&di=21640ba9d91c330452bd806943e5b694&imgtype=0&src=http%3A%2F%2Fimg.xshuma.com%2F201310%2F193356131008474377.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571468735356&di=1d11871234a61ab99df9e15b8b312ca5&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1416008260%2C1136325368%26fm%3D214%26gp%3D0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571468031230&di=2859a6639e3e4d5446a35c29efbfa60b&imgtype=0&src=http%3A%2F%2Fimg1.pconline.com.cn%2Fpiclib%2F200807%2F28%2Fbatch%2F1%2F6103%2F1217258263835tlbbgbp4r5.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571468031230&di=c88caa5fd31689d1772f01ae46f599e1&imgtype=0&src=http%3A%2F%2Fimg1.pconline.com.cn%2Fpiclib%2F200807%2F28%2Fbatch%2F1%2F6103%2F12172582638356xoxbzcx37.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571468002678&di=1cc2d96aa4b9324f4d54f2cd97499029&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fe99526d488dc57aac37f0169334fbb28.jpeg']; 
     this.setData(
       {
        background
       }
     );


     my.getSystemInfo({
       success: (res) => {
        console.log(res);
        var height=res.screenHeight;
        console.log('screenHeight='+height);
        this.setData({
          height
        })
       },
     });
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots,
    });
  },
  changeVertical() {
    this.setData({
      vertical: !this.data.vertical,
    });
  },
  changeCircular(e) {
    this.setData({
      circular: !this.data.circular,
    });
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay,
    });
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value,
    });
  },
});
