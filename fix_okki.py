import os

files = [f for f in os.listdir('.') if f.endswith('.html')]

# The exact "bad" string that was inserted previously
bad_code = '`n<!-- OKKI CRM Tracking -->`n<script>`n  window.okkiConfigs = window.okkiConfigs || [];`n  function okkiAdd() { okkiConfigs.push(arguments); };`n  okkiAdd(\\"analytics\\", { siteId: \\"514026-31214\\", gId: \\"\\" });`n</script>`n<script async src=\\"//tfile.xiaoman.cn/okki/analyze.js?id=514026-31214-\\"></script>`n'

good_code = """
<!-- OKKI CRM Tracking -->
<script>
  window.okkiConfigs = window.okkiConfigs || [];
  function okkiAdd() { okkiConfigs.push(arguments); };
  okkiAdd("analytics", { siteId: "514026-31214", gId: "" });
</script>
<script async src="//tfile.xiaoman.cn/okki/analyze.js?id=514026-31214-"></script>
"""

for f in files:
    try:
        with open(f, 'r', encoding='utf-8-sig') as file:
            content = file.read()
        
        # 1. Clean up the bad insertion if it exists
        if bad_code in content:
            content = content.replace(bad_code, good_code)
            with open(f, 'w', encoding='utf-8-sig') as file:
                file.write(content)
            print(f'Fixed: {f}')
        # 2. If it's not there at all (some failed or were missed), add it clean
        elif 'okki/analyze.js' not in content:
            if '</body>' in content:
                content = content.replace('</body>', good_code + '</body>')
                with open(f, 'w', encoding='utf-8-sig') as file:
                    file.write(content)
                print(f'Installed: {f}')
            else:
                print(f'Skipped (no body tag): {f}')
    except Exception as e:
        print(f'Error processing {f}: {e}')
