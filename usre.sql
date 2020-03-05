/*
Navicat MySQL Data Transfer

Source Server         : lijie
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : usre

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2019-12-20 13:40:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `product`
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `por_id` int(11) NOT NULL AUTO_INCREMENT,
  `por_name` varchar(50) DEFAULT NULL,
  `por_namer` varchar(50) DEFAULT NULL,
  `por_price` float(50,0) DEFAULT NULL,
  `por_qi` varchar(50) DEFAULT NULL,
  `por_jiao` varchar(50) DEFAULT NULL,
  `por_pic` varchar(50) DEFAULT NULL,
  `por_picr` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`por_id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '小米9 骁龙855', '4800万超清四摄 高通骁龙665', '1099', '彼岸官方旗舰店', '6.6万笔', 'shoji1.jpg', 'child.png');
INSERT INTO `product` VALUES ('2', 'Apple iPhone XS Max (A2104)', '256GB 金色 移动联通电信4G手机 双卡双待', '7199', '彼岸官方旗舰店', '12万笔', 'shoji2.jpg', 'child.png');
INSERT INTO `product` VALUES ('3', '华为 HUAWEI Mate 30 Pro', '4800万超清四摄 高通骁龙855', '3999', '彼岸官方旗舰店', '12万笔', 'shoji3.jpg', 'child.png');
INSERT INTO `product` VALUES ('4', ' 华为 HUAWEI nova 6', '105°前置广角双摄 超感光暗拍 麒麟990芯片', '3199', '彼岸官方旗舰店', '6.6万笔', 'shoji4.jpg', 'child.png');
INSERT INTO `product` VALUES ('5', 'Redmi Note7Pro', '索尼4800万超清双摄 骁龙675 ', '1199', '彼岸官方旗舰店', '12万笔', 'shoji5.jpg', 'child.png');
INSERT INTO `product` VALUES ('6', '魅族16sPro手机 ', '黑之谧镜 全网通（6G+128G）', '2668', '彼岸官方旗舰店', '12万笔', 'shoji6.jpg', 'child.png');
INSERT INTO `product` VALUES ('7', '魅族 16s Pro 骁龙855plus ', '全面屏拍照游戏手机 6GB+128GB 暮光森林', '2689', '彼岸官方旗舰店', '12万笔', 'shoji7.jpg', 'child.png');
INSERT INTO `product` VALUES ('8', '努比亚 nubia 红魔3S', ' 8GB+128GB 玄铁黑 骁龙855Plus ', '2999', '彼岸官方旗舰店', '12万笔', 'shoji8.jpg', 'child.png');
INSERT INTO `product` VALUES ('9', '双金冠Apple/苹果 iPhone XS ', 'Max手机苹果xs国行 双卡iphonexsmax', '3100', '彼岸官方旗舰', '6.6万笔', 'shoji9.jpg', 'child.png');
INSERT INTO `product` VALUES ('10', '直降200【当天发】Huawei/华为 ', '畅想9plus新款nova5pro正品5i学生手机5g荣耀9x', '1199', '彼岸官方旗舰', '6.6万笔', 'shoji10.jpg', 'child.png');
INSERT INTO `product` VALUES ('11', '荣耀(honor)20 PRO 8GB+256GB', '定格奇幻之美 4800万全焦段AI四摄 双光学防抖', '2999', '彼岸官方旗舰', '6.6万笔', 'shoji11.jpg', 'child.png');
INSERT INTO `product` VALUES ('12', 'vivo iQOO Neo 855竞速版 8+128GB ', ' 骁龙855Plus 33W超快闪充 4500mAh大电池', '2599', '彼岸官方旗舰', '7万笔', 'shoji12.jpg', 'child.png');
INSERT INTO `product` VALUES ('13', 'OPPO K5 奇幻森林 6G+128G', '6400万超清四摄护眼水滴屏全网通4G全面屏拍照', '1789', '彼岸官方旗舰', '7万笔', 'shoji13.jpg', 'child.png');
INSERT INTO `product` VALUES ('14', 'Sony/索尼 Xperia 5', '眼部对焦 三摄手机 6GB+128GB 骁龙855 晶蓝 移动联通电信4G手机', '5199', '彼岸官方旗舰', '7万笔', 'shoji14.jpg', 'child.png');
INSERT INTO `product` VALUES ('15', 'Sony/索尼 Xperia 1', ' 三摄手机 6GB+128GB 6.5英寸 4K HDR OLED屏幕 双卡版 霞紫', '5399', '彼岸官方旗舰', '6.6万笔', 'shoji15.jpg', 'child.png');
INSERT INTO `product` VALUES ('16', 'vivo S1 冰湖蓝 6GB+64GB 全面屏 全网通4G手机', '2800万AI高清自拍 超广角AI三摄  ', '1298', '彼岸官方旗舰', '7万笔', 'shoji16.jpg', 'child.png');

-- ----------------------------
-- Table structure for `usertable`
-- ----------------------------
DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) DEFAULT NULL,
  `user_password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usertable
-- ----------------------------
INSERT INTO `usertable` VALUES ('1', 'root', 'root');
INSERT INTO `usertable` VALUES ('3', 'lijie', 'lijie');
INSERT INTO `usertable` VALUES ('32', '', '');
INSERT INTO `usertable` VALUES ('33', '333', '333');
INSERT INTO `usertable` VALUES ('34', 'admin', 'admin');
