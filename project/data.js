 let SkinCare =[
        {img1:'../Utils/img/imag.jpg', img2:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060552905975-2_825x.jpg?v=1671541617', brand : 'Augustinus Bader', name :'The Hydration Heroes With The Rich Cream', "category":'CONSCIOUS BEAUTY', "edition":'LIMITED EDITION',
        price: '325',desc:'Hydrate to the fullest with this heroic skin care duo.'
        },

        {img1:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-635494263008-1_825x.jpg?v=1670536187',
         img2:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-635494263008-2_825x.jpg?v=1670536188', brand : 'SkinCeuticals', name :'C E Ferulic', "category":'CONSCIOUS BEAUTY', edition:'LIMITED EDITION',
        price: '169',desc:'Advanced antioxidant treatment and skin protector designed to defend against photoaging and reveal more youthful skin',
        },

        {img1:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-60treatments-817237011842-1_825x.jpg?v=1671747345',
         img2:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-p817237011606-3_825x.jpg?v=1671747340', brand : 'M-61', name :'PowerGlow Peel', "category":'CONSCIOUS BEAUTY', edition:'LIMITED EDITION',
        price: '118',desc:'Dramatically improve skin in 1 minute with this 1-step exfoliating peel. '
        },

        {img1:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-854161005097-1_825x.jpg?v=1671324035', img2:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-854161005097-3_75x.jpg?v=1671324036',
         brand : 'Tata Harper', name :'Regenerating Cleanser', "category":'CONSCIOUS BEAUTY', edition:'LIMITED EDITION',
        price: '88',desc:'4 interest-free payments of $81.25 with Klarna.', use:'A daily exfoliating treatment with physical and chemical exfoliators that smooths skin and restores radiance.',
        },

        {img1:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-747930142379-1_825x.jpg?v=1670447635', img2:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-854161005097-3_75x.jpg?v=1671324036', brand : 'La Mer', name :'The Glowing Hydration Duet', "category":'CONSCIOUS BEAUTY', edition:'LIMITED EDITION',
        price: '490',desc:'4 interest-free payments of $81.25 with Klarna.', use:'Smooth, moisturize, and create an all-around glow with this limited-edition duo encased in a keepsake box. A $640 value.',
        },

        {img1:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060534510043-1_825x.jpg?v=1669842342', img2:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060534510043-1_825x.jpg?v=1669842342', brand : 'The Light Salon', name :'Boost LED Mask', "category":'CONSCIOUS BEAUTY', edition:'LIMITED EDITION',
        price: '495',desc:'4 interest-free payments of $81.25 with Klarna.', use:'Plump, brighten, lift, treat uneven skin tone and texture, reduce fine lines and wrinkles, and heal inflammation for a hydrated, even complexion.',
        },

        
        {img1:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060280378195-1_825x.jpg?v=1667031061', img2:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060280378195-2_825x.jpg?v=1667031062', brand : '111SKIN', name :'Boost LED Mask', "category":'CONSCIOUS BEAUTY', edition:'LIMITED EDITION',
        price: '115',desc:'4 interest-free payments of $81.25 with Klarna.', use:'This Essence is designed to help skin appear brighter, more luminous and visibly rejuvenated over time.',
        },

        
        {img1:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-633222109758-1_825x.jpg?v=1667991379', img2:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-633222109758-1_825x.jpg?v=1667991379', brand : 'RéVive', name :'Masques des Yeux Revitalizing Eye Mask', "category":'CONSCIOUS BEAUTY', edition:'LIMITED EDITION',
        price: '200',desc:'4 interest-free payments of $81.25 with Klarna.', use:'A concentrated eye mask that firms and diminishes the appearance of puffiness, lines and wrinkles around the eye area.',
        },

        
        {img1:'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011972-1_825x.jpg?v=1671746844', img2:'hhttps://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011972-4_825x.jpg?v=1671746846', brand : 'M-61', name :'Sun+Slopes Skincare Set SPF 45', "category":'CONSCIOUS BEAUTY', edition:'LIMITED EDITION',
        price: '72',desc:'4 interest-free payments of $81.25 with Klarna.', use:'Three-piece limited-edition set that hydrates and deeply nourishes to create a replenished complexion. $138 Value!',
        },
    ];
    console.log(SkinCare);

    
fetch('../jsondata/products.json').then(function(ele){
  return ele.json();
}).then(function(data){
  data.forEach(function(ele){
    // SkinCare.push(ele);
    console.log(ele);
  })
 });
