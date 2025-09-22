# 🔍 Debug: GitHub Actions không inject API key

## 🐛 Vấn đề
- GitHub Secret đã setup nhưng Chat AI vẫn không hoạt động trên production
- Có thể GitHub Actions chưa được trigger hoặc secret chưa được inject đúng

## 🔧 Kiểm tra các bước

### 1. ✅ GitHub Secret đã setup
Vào: https://github.com/ngocthien2306/thienduyen.memory/settings/secrets/actions
- Tên: `REACT_APP_OPENAI_API_KEY`
- Value: API key của bạn

### 2. 🔍 Kiểm tra GitHub Actions
Vào: https://github.com/ngocthien2306/thienduyen.memory/actions
- Xem workflow "Deploy to GitHub Pages" đã chạy chưa
- Kiểm tra build log có inject API key không

### 3. 🚀 Trigger deployment
Cần push commit mới để trigger GitHub Actions:
```bash
git commit --allow-empty -m "Trigger GitHub Actions deployment"
git push origin develop
```

## 🔄 Workflow hiện tại
```yaml
- name: Build
  run: npm run build
  env:
    REACT_APP_OPENAI_API_KEY: ${{ secrets.REACT_APP_OPENAI_API_KEY }}
```

## 📝 Debug steps
1. Push commit này sẽ trigger GitHub Actions
2. Check Actions tab để xem có error không
3. Kiểm tra production site sau khi deploy xong