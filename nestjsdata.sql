INSERT INTO "public"."customer" ("id", "phoneNumber", "givenName", "surname", "email") VALUES
(1, '243-158-6779', 'Sunny', 'Yitshak', 'syitshak0@cafepress.com');
INSERT INTO "public"."customer" ("id", "phoneNumber", "givenName", "surname", "email") VALUES
(2, '779-896-2742', 'Philippe', 'Bover', 'pbover1@theatlantic.com');
INSERT INTO "public"."customer" ("id", "phoneNumber", "givenName", "surname", "email") VALUES
(3, '319-365-8347', 'Lana', 'Sare', 'lsare2@washington.edu');

INSERT INTO "public"."price" ("id", "amount", "currency") VALUES
(1, '200', 'EUR');
INSERT INTO "public"."price" ("id", "amount", "currency") VALUES
(2, '100', 'EUR');
INSERT INTO "public"."price" ("id", "amount", "currency") VALUES
(3, '20', 'EUR');
INSERT INTO "public"."price" ("id", "amount", "currency") VALUES
(4, '30', 'EUR'),
(5, '50', 'EUR'),
(6, '51', 'EUR'),
(7, '23', 'EUR'),
(8, '24', 'EUR'),
(9, '25', 'EUR'),
(10, '26', 'EUR'),
(11, '27', 'EUR'),
(12, '28', 'EUR'),
(13, '29', 'EUR'),
(14, '30', 'EUR'),
(15, '31', 'EUR'),
(16, '32', 'EUR'),
(17, '33', 'EUR'),
(18, '34', 'EUR'),
(19, '35', 'EUR'),
(20, '36', 'EUR');

INSERT INTO "public"."item" ("id", "gtin", "name", "category", "sku", "brand", "priceId") VALUES
(1, '2913274888056', 'massa donec dapibus duis at velit eu est congue elementum', 'sports', 'GCH', 'Aberdeen Greater China Fund, Inc.', 1);
INSERT INTO "public"."item" ("id", "gtin", "name", "category", "sku", "brand", "priceId") VALUES
(2, '2195382612447', 'vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis', 'beauty', 'HCP', 'HCP, Inc.', 2);
INSERT INTO "public"."item" ("id", "gtin", "name", "category", "sku", "brand", "priceId") VALUES
(3, '2562532952291', 'metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies', 'home', 'DRE', 'Duke Realty Corporation', 3);
INSERT INTO "public"."item" ("id", "gtin", "name", "category", "sku", "brand", "priceId") VALUES
(4, '3387926697562', 'libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus', 'home', 'AGC', 'Advent Claymore Convertible Securities and Income Fund II', 4),
(5, '3033634751303', 'tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede', 'beauty', 'MARK', 'Remark Holdings, Inc.', 5),
(6, '2491031370841', 'praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer', 'food', 'CMCSA', 'Comcast Corporation', 6),
(7, '6846318008680', 'enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit', 'electronics', 'HRC', 'Hill-Rom Holdings Inc', 7),
(8, '5482596371258', 'rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue', 'electronics', 'GOLD', 'Randgold Resources Limited', 8),
(9, '6037201564231', 'pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus', 'electronics', 'XNCR', 'Xencor, Inc.', 9),
(10, '9587484760343', 'mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes', 'food', 'SHIPW', 'Seanergy Maritime Holdings Corp', 10),
(11, '3669390210392', 'mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis', 'beauty', 'FLO', 'Flowers Foods, Inc.', 11),
(12, '1972130058363', 'nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio', 'clothing', 'NVRO', 'Nevro Corp.', 12),
(13, '4161417835485', 'sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean', 'electronics', 'PRSS', 'CafePress Inc.', 13),
(14, '5511694405536', 'mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus', 'electronics', 'ADVM', 'Adverum Biotechnologies, Inc.', 14),
(15, '7452993145538', 'id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices', 'beauty', 'PAVM', 'PAVmed Inc.', 15),
(16, '6769240519560', 'enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in', 'clothing', 'CNIT', 'China Information Technology, Inc.', 16),
(17, '4585800040466', 'donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris', 'beauty', 'RAS', 'RAIT Financial Trust', 17),
(18, '6655511313603', 'vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus', 'sports', 'JAGX', 'Jaguar Animal Health, Inc.', 18),
(19, '6741130876838', 'quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non', 'sports', 'KEY', 'KeyCorp', 19),
(20, '9845194229261', 'justo morbi ut odio cras mi pede malesuada in imperdiet', 'food', 'DRWI', 'DragonWave Inc', 20);


INSERT INTO "public"."shipping" ("id", "phoneNumber", "countryCode", "name", "postcode", "line1", "suburb", "customerId") VALUES
(1, '243-158-6779', 'BR', 'Sunny Yitshak', '28820-000', '3 Steensland Park', 'Silva Jardim', 1);
INSERT INTO "public"."shipping" ("id", "phoneNumber", "countryCode", "name", "postcode", "line1", "suburb", "customerId") VALUES
(2, '779-896-2742', 'BR', 'Philippe Bover', '58255-000', '170 Randy Point', 'Belém', 2);
INSERT INTO "public"."shipping" ("id", "phoneNumber", "countryCode", "name", "postcode", "line1", "suburb", "customerId") VALUES
(3, '319-365-8347', 'CL', 'Lana Sare', '', '2 Main Parkway', 'Mulchén', 3);
