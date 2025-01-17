package com.newmes.onpremise.domains.report.service;

import com.newmes.onpremise.domains.report.dto.request.ReportRequestDto;
import com.newmes.onpremise.domains.report.dto.response.ReportResponseDto;

import java.util.List;

public interface ReportService {
    String register(ReportRequestDto reportDto);
    ReportResponseDto readById(String id);
    void updateReport(String id, ReportRequestDto updateRequest);
    List<ReportResponseDto> readBymemberId();
}
