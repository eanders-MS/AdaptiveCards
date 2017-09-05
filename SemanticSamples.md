# Types of cards

Below are a few common types of cards and their associated payloads.
> WDG DESIGN: Please help me create representative comps of these paylods in various windows experiences

1. News Article (Zuckerberg)
2. Bing Answer (Justin Trudeau)
3. Location (Starbucks)
4. Stock quote (S&P 500)
5. Video

# News Article

![Card1](https://1j9zgw.dm2301.livefilestore.com/y4ptWg5OxKjjVrNXX1FigxJTEHqSjPdZ0lN7wQUIlSQfW5-iM6N3_oDQ30QaHfhdEzkRn4BHidbt1vb1NMSjIrfe_McPeMfO4k5Asn0Zi5LkytPAeqrAEmzHXhDxyL5Vb_dCR17e7sFJulF5X7PJIRV4wpRpa41Atn0psb0KpfSp6Fpm4B4yJiu_pCM0B95egjc/card1.png?psid=1)

> Design TODO: show comps for Timeline, Action Center, NTP

```json
{
    "type": "AdaptiveCard",
    "version": "vNext",
    "attribution": {
        "logo": "http://bing.com/logo.png",
        "text": "Bing"
    },
    "category": "Business Insider",
    "title": "Here's how the CEOs on Fortune's '40 Under 40' list are doing leading the something or other",
    "body": "Fortune released its annual '40 Under 40' list of the most influential people under the age of 40, which includes Mark Zuckerberg.",
    "images": {
        "card": {
            "url": "http://findimage",
            "displayPreference": [ "vertical", "thumbnail" ]
        }
    },
    "actions": [
        {
            "type": "Action.Submit",
            "title": "Action One"
        }
    ]
}
```

# Bing Answer

* "Who is Justin Trudeau?"

```json
{
    "type": "AdaptiveCard",
    "version": "vNext",
    "attribution": {
        "logo": "http://bing.com/logo.png",
        "text": "Bing"
    },
    "title": "Justin Trudeau",
    "body": [
        {
            "type": "TextBlock",
            "text": "Prime Minister • Canada"
        },
        {
            "type": "TextBlock",
            "wrap": true,
            "text": "Born December 25, 1971 is a Canadian politician. He is the 23rd and current Prime Minister of Canada and leader of the Liberal Party"
        }
    ],
    "images": {
        "card": {
            "url": "http://findimage",
            "displayPreference": [ "vertical", "thumbnail" ]
        }
    }
}
```

# Starbucks

```json
{
    "type": "AdaptiveCard",
    "version": "vNext",
    "attribution": {
        "logo": "http://bing.com/logo.png",
        "text": "Bing"
    },
    "category": {
        "text": "Coffee Houses - $$",
        "selectAction": {} 
    },
    "title": "Starbucks",
    "body": [
        {
            "type": "TextBlock",
            "text": "4 stars Yelp (312)"
        },
        {
            "type": "TextBlock",
            "wrap": true,
            "text": "Born December 25, 1971 is a Canadian politician. He is the 23rd and current Prime Minister of Canada and leader of the Liberal Party"
        }
    ],
    "images": {
        "card": {
            "url": "http://findimage",
            "displayPreference": [ "vertical", "thumbnail" ]
        }
    }
}
```


# Stock quote

* TODO: does this card have a title or should it just be a body of TextBlocks?

```json
{
    "type": "AdaptiveCard",
    "version": "vNext",
    "attribution": {
        "logo": "http://bing.com/logo.png",
        "text": "Bing"
    },
    "category": {
        "text": "S&P 500 • S&P 500 Index",
        "selectAction": {},
    },       
    "title": "August 18, 2017",
    "body": [
        {
            "type": "TextBlock",
            "text": "2,293.08",
            "size": "extraLarge"
        },
        {
            "type": "TextBlock",
            "text": "▲ 0.52 (0.0235)",
            "size": "small",
            "color": "accent"
        }
    ]
}
```

# Weather



# Video

* TODO: Finish this schema
* See: https://docs.microsoft.com/en-us/dotnet/api/microsoft.bot.connector.videocard?view=botbuilder-3.8

```json
{
    "type": "AdaptiveCard",
    "version": "vNext",
    "media": {
        "contentType": "video",
        "url": "http://pig.avi"
    },
    "title": "Deep Sea Diver",
    "body": "Deep Sea Diver performs 'You Go Running' live during KEXP's Hood to Hood. The band is touring Ireland for the summer"
}
```