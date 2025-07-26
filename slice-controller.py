#!/usr/bin/env python3
"""
GCED Conference 이미지 슬라이싱 컨트롤러
버튼 위치에 맞게 이미지를 정확하게 슬라이싱합니다.
"""

from PIL import Image, ImageDraw
import os

def slice_image_with_coordinates():
    # 이미지 로드
    img_path = 'public/images/gced-conference.png'
    img = Image.open(img_path)
    width, height = img.size
    print(f"원본 이미지 크기: {width}x{height}")
    
    # 조정된 슬라이싱 좌표 (백분율 기준) - 버튼이 잘리지 않도록 개선
    slice_percentages = {
        'top': {
            'start': 0.0,      # 상단 0%부터
            'end': 0.42,       # 28%까지 (줄임)
            'description': '헤더, 제목, Overview 섹션'
        },
        'register-onsite': {
            'start': 0.42,     # 28%부터 (위로 올림)
            'end': 0.44,       # 46%까지 (아래로 늘림)
            'description': 'Register On-site 버튼 (왼쪽)',
            'width_start': 0.0,
            'width_end': 0.5
        },
        'register-korean': {
            'start': 0.42,     # 28%부터 (위로 올림)
            'end': 0.44,       # 46%까지 (아래로 늘림)
            'description': '현장 참가 등록 버튼 (오른쪽)',
            'width_start': 0.5,
            'width_end': 1.0
        },
        'pre-live': {
            'start': 0.44,     # register 버튼 아래부터
            'end': 0.48,       # LIVE 버튼 바로 위까지
            'description': 'LIVE 버튼 위 섹션'
        },
        'live': {
            'start': 0.48,     # 48%부터 (조금 아래로)
            'end': 0.50,       # 50%까지 (버튼만 딱)
            'description': 'LIVE 버튼 (빨간색)'
        },
        'middle': {
            'start': 0.50,     # 52%부터
            'end': 0.92,       # 86%까지 (프로그램 부분)
            'description': 'Programme 및 스케줄 정보'
        },
        'website-button': {
            'start': 0.92,     # 86%부터 (더 아래로)
            'end': 0.935,      # 91.5%까지 (버튼이 잘리지 않도록)
            'description': 'The IConGCED Website 버튼 (왼쪽)',
            'width_start': 0.0,
            'width_end': 0.5
        },
        'korean-website-button': {
            'start': 0.92,     # 86%부터 (더 아래로)
            'end': 0.935,      # 91.5%까지 (버튼이 잘리지 않도록)
            'description': '국제회의 홈페이지 버튼 (오른쪽)',
            'width_start': 0.5,
            'width_end': 1.0
        },
        'bottom': {
            'start': 0.935,    # 91.5%부터
            'end': 1.0,        # 끝까지
            'description': '주최기관 로고 및 연락처'
        }
    }
    
    print("\n=== 현재 슬라이싱 좌표 (백분율) ===")
    for name, coords in slice_percentages.items():
        print(f"{name}:")
        print(f"  세로: {coords['start']*100:.1f}% ~ {coords['end']*100:.1f}%")
        if 'width_start' in coords:
            print(f"  가로: {coords['width_start']*100:.1f}% ~ {coords['width_end']*100:.1f}%")
        print(f"  설명: {coords['description']}")
        print()
    
    # 픽셀 좌표로 변환하여 슬라이싱
    slices = {}
    for name, coords in slice_percentages.items():
        if 'width_start' in coords:  # 가로로도 나누는 경우
            x1 = int(width * coords['width_start'])
            x2 = int(width * coords['width_end'])
        else:
            x1 = 0
            x2 = width
            
        y1 = int(height * coords['start'])
        y2 = int(height * coords['end'])
        
        slices[name] = (x1, y1, x2, y2)
        print(f"{name} 픽셀 좌표: ({x1}, {y1}, {x2}, {y2})")
    
    # 슬라이싱된 이미지들을 시각적으로 보여주는 미리보기 생성
    preview_img = img.copy()
    draw = ImageDraw.Draw(preview_img)
    
    colors = ['red', 'blue', 'green', 'orange', 'purple']
    for i, (name, coords) in enumerate(slices.items()):
        x1, y1, x2, y2 = coords
        color = colors[i % len(colors)]
        # 경계선 그리기
        draw.rectangle([x1, y1, x2, y2], outline=color, width=5)
        # 이름 표시
        draw.text((x1+10, y1+10), f"{i+1}. {name}", fill=color)
    
    # 디렉토리 생성
    os.makedirs('public/images/sliced', exist_ok=True)
    os.makedirs('debug', exist_ok=True)
    
    # 미리보기 저장
    preview_img.save('debug/slice-preview.png')
    print(f"\n슬라이싱 미리보기 저장: debug/slice-preview.png")
    
    # 각 조각 저장
    print("\n=== 슬라이싱 결과 ===")
    for name, coords in slices.items():
        slice_img = img.crop(coords)
        output_path = f'public/images/sliced/{name}.png'
        slice_img.save(output_path)
        print(f"{name}.png 저장 완료: {slice_img.size}")
    
    return slices, slice_percentages

def adjust_coordinates():
    """좌표를 수동으로 조정할 수 있는 함수"""
    print("=== 슬라이싱 좌표 조정 ===")
    print("버튼이 잘렸다면 다음 값들을 조정하세요:")
    print()
    
    # 추천 조정값들
    recommendations = {
        "Register On-site 버튼이 아래쪽으로 잘렸다면": {
            "register-onsite": {"start": 0.29, "end": 0.45},  # 시작점을 위로, 끝점을 아래로
            "register-korean": {"start": 0.29, "end": 0.45},
            "live": {"start": 0.45, "end": 0.51}
        },
        "LIVE 버튼이 잘렸다면": {
            "live": {"start": 0.41, "end": 0.51}  # 더 넓게
        },
        "전체적으로 Registration 섹션이 좁다면": {
            "top": {"end": 0.28},  # 상단을 줄이고
            "register-onsite": {"start": 0.28, "end": 0.46},  # Registration을 늘림
            "register-korean": {"start": 0.28, "end": 0.46},
            "live": {"start": 0.46, "end": 0.52}
        }
    }
    
    for problem, solution in recommendations.items():
        print(f"🔧 {problem}:")
        for section, coords in solution.items():
            for key, value in coords.items():
                print(f"   {section} {key}: {value} ({value*100:.1f}%)")
        print()

if __name__ == "__main__":
    print("🔪 GCED Conference 이미지 슬라이싱 컨트롤러")
    print("=" * 50)
    
    # 현재 설정으로 슬라이싱 실행
    slices, percentages = slice_image_with_coordinates()
    
    print("\n" + "="*50)
    adjust_coordinates()
    
    print("🔍 debug/slice-preview.png 파일을 확인해서 경계선을 확인하세요!")
    print("📝 좌표 조정이 필요하면 이 파일의 slice_percentages 값을 수정하세요!")