import altair as alt

markColor: str = '#000000'
textColor: str = '#000000'
gridColor: str = '#000000'
guideColor: str = '#000000'
defaultFont: str = 'IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,".sfnstext-regular",sans-serif'
condensedFont: str = 'IBM Plex Sans Condensed, system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", sans-serif'
fontWeight = 400


@alt.theme.register('altair_coal_theme', enable=True)
def altair_coal_theme() -> alt.theme.ThemeConfig:
    return {
        'config': {
            'background': 'transparent',
            'mark': {'color': markColor},
            'arc': {'fill': markColor},
            'area': {'fill': markColor},
            'line': {'stroke': markColor},
            'path': {'stroke': markColor},
            'rect': {'fill': markColor},
            'shape': {'stroke': markColor},
            'symbol': {'fill': markColor},

            'title': {
                'color': textColor,
                'anchor': 'start',
                'dy': -15,
                'fontSize': 16,
                'font': defaultFont,
                'fontWeight': 600,
            },

            'axisBand': {
                'grid': False,
            },
            'axis': {
                # Axis labels
                'labelColor': textColor,
                'labelFontSize': 12,
                'labelFont': condensedFont,
                'labelFontWeight': fontWeight,
                # Axis titles
                'titleColor': textColor,
                'titleFontWeight': 600,
                'titleFontSize': 12,

                # MISC
                'grid': True,
                'gridColor': gridColor,
                'labelAngle': 0,
                'domainWidth': 0.5,
                'labelPadding': 2,
                'tickSize': 5,
                'tickWidth': 0.5,
            },

            'axisX': {
                'gridDash': [6, 3],
                'gridWidth': 0.25,
                'gridColor': gridColor,
            },

            'axisY': {
                'gridDash': [6, 3],
                'gridWidth': 0.25,
                'gridColor': gridColor,
            },

            'legend': {
                'labelFontSize': 11,
                'padding': 1,
                'symbolType': 'square',
            },
            'style': {
                'guide-label': {
                    'font': defaultFont,
                    'fill': guideColor,
                    'fontWeight': fontWeight,
                },
                'guide-title': {
                    'font': defaultFont,
                    'fill': guideColor,
                    'fontWeight': fontWeight,
                },
            },
            'range': {
                'category': ['#000000', '#7F7F7F', '#1A1A1A', '#999999', '#333333', '#B0B0B0', '#4D4D4D', '#C9C9C9',
                             '#666666', '#DCDCDC'],
            },

        }
    }
